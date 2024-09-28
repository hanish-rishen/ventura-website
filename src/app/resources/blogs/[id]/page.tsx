"use client";
import React from 'react';
import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ScrollArea } from "@/components/ui/scroll-area";

const blogs = [
  {
    id: "fidas-sop",
    title: "FIDAS SOP: Comprehensive Guide to Fabric Inspection and Defect Analysis",
    summary: "Learn about the Standard Operating Procedure for Fabric Inspection & Defect Analysis System (FIDAS), including the importance of 100% inspection, key considerations, and the Four Point System.",
    author: "FIDAS Team",
    date: "June 15, 2023",
    tags: ["Quality Control", "Fabric Inspection", "Textile Industry", "SOP"],
    imageUrl: "/images/blogs/Capture.png",
    content: `
**FIDAS SOP: Comprehensive Guide to Fabric Inspection and Defect Analysis**

## Introduction

Fabric mills should perform 100% inspection before sending any consignment to the apparel industry to minimize hassles. This Standard Operating Procedure (SOP) outlines the key considerations, processes, and systems used in fabric inspection, with a focus on the widely-adopted Four Point System.

## Key Considerations for Fabric Inspection

### A. Inspection Environment and Equipment

- **Area**: The inspection area should be dry, open, clean, and cool with sufficient light.

- **Equipment**: 
  - Both garment makers and fabric mills should have high-quality inspection equipment. 
  - The inspection equipment should be smooth, fresh, user-friendly, and free from sharp edges that could scratch the fabric.

- **Accessories**: Essential accessories include:
  - Measuring tape
  - Scissors
  - Defect stickers or chalk
  - Fabric defect display board
  - Reference samples
  - Blank inspection forms

### B. Operation, Findings & Actions

- **Viewing Distance**: Inspectors should maintain a distance of 2 to 3 feet for optimal vision of the full fabric width.
 
- **Inspection Speed**: The speed should be adjusted based on the inspector's capability and the nature of the fabric being scrutinized.
 
- **Lighting**: Proper lighting is crucial for accurate defect detection and rating.

- **Inspection Process**: 
  - Roll selection
  - Proper fabric positioning
  - Thorough checking for defects and discrepancies

## The Four Point System

The Four Point System is the most popular and widely used method for fabric inspection due to its simplicity and effectiveness.

### Why the Four Point System is Preferable

- It's simple to apply, educate, and learn.

- It's certified by the American Society of Quality Control (ASQC) and the American Apparel Manufacturers (AAMA).

- It provides a standardized method for assigning penalty points based on defect severity.

### How the Four Point System Works

- Defects are classified based on their size and severity.

- Penalty points (1-4) are assigned to each defect.

- The total points per 100 square yards of fabric are calculated.

- Fabric with more than 40 points per 100 square yards is considered second quality.

## Conclusion

Implementing a robust fabric inspection process using the FIDAS SOP and the Four Point System can significantly improve quality control in textile manufacturing. By following these guidelines, both fabric mills and garment manufacturers can minimize defects, reduce waste, and ensure higher customer satisfaction.
    `
  },
  {
    id: "inspection-software",
    title: "FIDAS - FABRIC INSPECTION SOFTWARE",
    summary: "Discover how FIDAS software is revolutionizing fabric inspection and defect analysis in the textile industry.",
    author: "FIDAS Team",
    date: "July 1, 2023",
    tags: ["Quality Control", "Software", "Textile Industry", "Inspection"],
    imageUrl: "/images/blogs/fabric-inspection-software.png",
    content: `
**FIDAS - FABRIC INSPECTION SOFTWARE**

Fabric Inspection & Defect Analysis System (FIDAS) fabric inspection software has become a big asset within the field of quality control. FIDAS software is specially designed to register defects detected on fabric inspection frames, saving the operator many issues further down the production line.

## Key Features

FIDAS software features a high-end 15" touch panel P, complete with a graphical and intuitive, real-time gradation. This facilitates a user-friendly interaction with the inspector. Interfaced with the length counter, weighing scale, tagging device and other peripheral equipment. 

The software can be used in two ways:
- Combined with the on-loom, grey and finished fabric inspection and cutting system
- As a stand-alone terminal, to assist the manual inspection process, calculate the grade and print piece maps and labels

## FIDAS Software Features

- Order and piece information, including inspection instructions download from enterprise resource planning (ERP) system
- Entry facility for defect codes, referencing elements including severity, width and position
- Entry facility for notes and additional quality parameters, such as weight, width and shade
- Real-time piece map and defect concentration graph
- "Grade assistant" for real-time advice about the reasons for "off-quality"
- Import of defect maps and defect pictures for re-inspection/mending activities
- Front and back inspection, cutting and multi panel support
- Fully configurable user interface
- Foreign language support and on-screen language selection
- Ethernet connection an ERP system
- Interfaces for machine run/stop and speed control, printer, scale, barcode scanner and keyboard
- Length-counter interface for automatic length registration

## Conclusion

FIDAS software is transforming the fabric inspection process, making it more efficient, accurate, and user-friendly. By implementing this advanced software, textile manufacturers can significantly improve their quality control processes, reduce errors, and ultimately deliver higher quality products to their customers.
    `
  },
  {
    id: "optimization-software",
    title: "OPTIMON SOFTWARE FOR FABRIC CUT OPTIMISATION",
    summary: "Explore how OPTIMON software optimizes fabric cutting to reduce waste and improve customer satisfaction in the textile industry.",
    author: "FIDAS Team",
    date: "July 15, 2023",
    tags: ["Optimization", "Software", "Textile Industry", "Waste Reduction"],
    imageUrl: "/images/blogs/OPTIMON.gif",
    content: `
**OPTIMON SOFTWARE FOR FABRIC CUT OPTIMISATION – LINEAR CUT OPTIMISATION SOFTWARE**

The OPTIMON software is designed to limit production waste and better satisfy customer requests in the textile industry. While our specific experience is focused on fabric cut optimization, the software is suitable for all products that need to be fractioned from a big roll into smaller rolls.

## The Optimization Process

The process typically starts with a certain amount of finished or semi-finished material, where all quality features that can affect the fabric cut are known. These features are detected through visual inspection by human operators or automatic camera-based systems, including all fabric defects, their size and position, as well as other characteristics like shade of color and width.

The optimization software considers all these quality features and the constraints imposed by subsequent processes or final customers.

## Constraints in Fabric Cutting

Constraints can be divided into two main groups:

### 1. Dimensional Constraints
- Each final customer defines minimum and maximum sizes for acceptable rolls
- For rolls made of multiple sewn pieces, each piece must typically have a minimum size

### 2. Qualitative Constraints
- Defects are classified as "acceptable" or "to be cut away"
- "Acceptable" faults are only tolerated within certain limits
- The number of defects or their "demerit points" are considered within a given length of fabric
- Fault concentration and position within the roll are important factors

## Advantages of OPTIMON Software

1. Increased production yield by maximizing first quality fabric and reducing second quality and scrap
2. Ability to preview fragmentation results before physical cutting
3. Opportunity to rework fabric or reassign it to different customers with varying requirements
4. Enhanced focus on production defectivity control and its real impact

## Conclusion

OPTIMON software proves invaluable in making complex cutting decisions that are often impossible for human operators to optimize. By considering multiple factors and constraints, it significantly improves fabric utilization and helps manufacturers meet diverse customer requirements more effectively.
    `
  },
  {
    id: "wms-benefits",
    title: "WMS - Benefits",
    summary: "The Benefits of Using a FIDAS Real-Time Fabric Width Measurement System",
    author: "FIDAS Team",
    date: "August 1, 2023",
    tags: ["Width Measurement", "Quality Control", "Efficiency", "Waste Reduction"],
    imageUrl: "/images/blogs/FIDAS-GREIGE-FABRIC-INSPECTION-SOFTWARE.png",
    content: `
**The Benefits of Using a FIDAS Real-Time Fabric Width Measurement System**

Fabric width is an important factor in the textile industry. It affects the amount of fabric needed to make a garment, the efficiency of the cutting process, and the quality of the finished product.

Traditionally, fabric width was measured manually using a fabric tape measure. This was a time-consuming and error-prone process. However, real-time fabric width measurement systems can now automate this process, providing accurate and consistent measurements in real time.

## Key Benefits

There are many benefits to using a real-time fabric width measurement system. Here are a few of the most important ones:

1. **Increased accuracy**: Real-time fabric width measurement systems are more accurate than manual measurement methods. This is because they can take multiple measurements at once and average them out, resulting in a more accurate reading.

2. **Improved efficiency**: Real-time fabric width measurement systems can save time and improve efficiency by automating the measurement process. This can free up workers to focus on other tasks, such as cutting fabric.

3. **Reduced waste**: Real-time fabric width measurement systems can help to reduce waste by ensuring that the correct amount of fabric is used. This can save money and help to protect the environment.

4. **Improved quality**: Real-time fabric width measurement systems can help to improve the quality of the finished product by ensuring that the fabric is cut accurately. This can lead to fewer defects and a more consistent product.

## Additional Benefits

Here are some additional benefits of using a real-time fabric width measurement system:

- **Increased productivity**: Real-time fabric width measurement systems can help to increase productivity by reducing the time spent on manual measurement.

- **Improved traceability**: Real-time fabric width measurement systems can help to improve traceability by providing a record of the fabric width at each stage of the production process.

- **Enhanced decision-making**: Real-time fabric width measurement systems can provide valuable data that can be used to make better decisions about fabric sourcing, cutting, and production.

## FIDAS-WMS: The Right Real-Time Fabric Width Measurement System for Your Needs

Real-time fabric width measurement systems are becoming increasingly popular in the textile industry. These systems can automate the measurement process, providing accurate and consistent measurements in real time.

If you are considering investing in a real-time fabric width measurement system, there are a few things you need to keep in mind:

- The type of fabric you will be measuring: Some systems are better suited for certain types of fabric than others. For example, laser scanners are not ideal for measuring fabrics with a lot of pile or nap.

- The accuracy and repeatability required: The accuracy and repeatability of the system will depend on the tolerances required for your application.

- The speed of the system: The speed of the system is important if you need to measure a large number of fabrics quickly.

- The cost of the system: Real-time fabric width measurement systems can range in price from a few thousand dollars to tens of thousands of dollars.

- The ease of use and maintenance of the system: The system should be easy to use and maintain, so that you can get the most out of it.

## FIDAS: Your Solution for Real-Time Fabric Width Measurement

FIDAS is a real-time fabric width measurement system developed by Ventura Automation Services Inc. It is a versatile system that can be used to measure a wide variety of fabrics. FIDAS is known for its accuracy, speed, and ease of use.

If you are looking to improve the accuracy, efficiency, and quality of your fabric cutting process, then FIDAS real-time fabric width measurement system is a worthwhile investment.
    `
  }
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const blog = blogs.find(b => b.id === params.id);

  if (!blog) {
    return <div className="text-center py-16">Blog post not found</div>;
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/resources/blogs" className="text-blue-600 hover:underline">
            ← Back to all blogs
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          {blog.title}
        </h1>

        <div className="relative w-full h-80 mb-8">
          <Image 
            src={blog.imageUrl} 
            alt={blog.title} 
            layout="fill" 
            objectFit="fill" 
            className="rounded-lg"
          />
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FaUser className="mr-2" />
          <span className="mr-4">{blog.author}</span>
          <FaCalendarAlt className="mr-2" />
          <span>{blog.date}</span>
        </div>

        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8">
          <FaTags className="mr-2" />
          {blog.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="mr-2 mb-2 bg-blue-100 text-blue-600 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>

        <ScrollArea className="h-[60vh] overflow-y-auto">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-5 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-medium mt-4 mb-2" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-4" {...props} />,
                li: ({node, ...props}) => <li className="mb-1" {...props} />,
                p: ({node, ...props}) => <p className="mb-4" {...props} />
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}