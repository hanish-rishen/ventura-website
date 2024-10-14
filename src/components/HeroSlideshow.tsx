"use client";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { client } from "@/lib/sanity";

interface Slide {
  title: string;
  description: string;
  image?: string;
  imageUrl?: string;
}

export default function HeroSlideshow() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSlides() {
      try {
        const fetchedSlides = await client.fetch(`
          *[_type == "heroSlideshow"][0].slides[] {
            title,
            description,
            "image": image.asset->url,
            imageUrl
          }
        `);
        setSlides(fetchedSlides || []);
      } catch (error) {
        console.error("Error fetching slides:", error);
        setSlides([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSlides();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (slides.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <div className="relative w-full mx-auto text-gray-800">
      <Carousel
        setApi={setApi}
        className="w-full mx-auto"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[60vh] md:h-[calc(100vh-64px)]">
                <Image
                  src={slide.image || slide.imageUrl || ''}
                  alt={slide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                  className="brightness-50"
                  sizes="100vw"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 px-12 md:px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center">{slide.title}</h2>
                  <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white hover:bg-white/40 transition-all duration-300" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white hover:bg-white/40 transition-all duration-300" />
        </div>
      </Carousel>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
        {current} / {count}
      </div>
    </div>
  );
}
