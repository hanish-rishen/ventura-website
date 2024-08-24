"use client";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Fabric Inspection",
    description: "FIDAS: Achieving 99.9% defect detection accuracy",
  },
  {
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "AI-Powered Solutions",
    description: "Reducing inspection time by 75% with our cutting-edge AI",
  },
  {
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Global Support Network",
    description: "97% customer satisfaction rate with our 24/7 expert assistance",
  },
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Automotive Textile Excellence",
    description: "Improving quality standards by 40% in automotive seating fabrics",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Advanced Data Analytics",
    description: "Providing 360° actionable insights with 99.5% data accuracy",
  },
  {
    image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
    title: "Sustainabile",
    description: "Reducing waste by 30% and improving efficiency by 50%",
  },
];

export default function HeroSlideshow() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  return (
    <div className="relative w-full mx-auto text-gray-800 pt-20">
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
              <div className="relative h-[calc(100vh-8rem)] w-full p-8">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={index === 0}
                    className="rounded-lg transition-transform duration-300 hover:scale-110"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
                    <h2 className="text-6xl font-bold mb-4 text-center text-white">{slide.title}</h2>
                    <p className="text-2xl text-center max-w-3xl backdrop-blur-sm bg-white bg-opacity-10 p-4 rounded-lg text-white">{slide.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 hover:bg-gray-200 transition-all duration-300" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 hover:bg-gray-200 transition-all duration-300" />
      </Carousel>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md px-6 py-3 rounded-full text-white font-semibold">
        {current} / {count}
      </div>
    </div>
  );
}