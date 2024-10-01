import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaCalendarAlt, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

async function getBlogs() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{name},
    mainImage,
    publishedAt,
    summary,
    "tags": categories[]->title
  }`, {}, { next: { revalidate: 0 } })
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-16 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          FIDAS Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: any) => (
            <article
              key={blog._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Link href={`/resources/blogs/${blog.slug?.current || ''}`}>
                <div className="relative h-48">
                  <Image 
                    src={urlFor(blog.mainImage).url()}
                    alt={blog.title} 
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Read More</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.summary}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaUser className="mr-2" />
                    <span className="mr-4">{blog.author?.name || 'Unknown Author'}</span>
                    <FaCalendarAlt className="mr-2" />
                    <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    {blog.tags && blog.tags.map((tag: string, tagIndex: number) => (
                      <span key={tagIndex} className="mr-2 mb-2 bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <span className="mr-2">Read More</span>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}