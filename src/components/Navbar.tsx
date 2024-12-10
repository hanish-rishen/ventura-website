"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from 'next/navigation';
import SmallLoader from './SmallLoader';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-between items-center gap-4">
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/Ventura.png" alt="Ventura Logo" width={100} height={40} />
          </Link>

          <div className="hidden md:block flex-1 max-w-3xl mx-auto">
            <nav className={cn(
              "rounded-full px-6 py-2 transition-all duration-300 border-2 border-blue-600/20",
              pathname === '/' 
                ? isScrolled 
                  ? "bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg" 
                  : "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                : "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg"
            )}>
              <NavbarContent pathname={pathname} isScrolled={isScrolled} />
            </nav>
          </div>

          <Link 
            href="/contact/us"
            className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition-all duration-300 ease-out bg-blue-600 rounded-full group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Get a Quote</span>
            <span className="relative invisible">Get a Quote</span>
          </Link>

          <button
            className="md:hidden rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden mt-2 mx-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden"
          >
            <motion.div className="p-6">
              <NavbarContent isMobile={true} pathname={pathname} isScrolled={isScrolled} setIsMenuOpen={setIsMenuOpen} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavbarContent({ isMobile = false, pathname, isScrolled, setIsMenuOpen }: { isMobile?: boolean; pathname: string; isScrolled: boolean; setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [active, setActive] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setLoading(href);
    router.push(href);
    setTimeout(() => {
      setLoading(null);
      if (isMobile && setIsMenuOpen) {
        setIsMenuOpen(false);
      }
    }, 150);
  };

  const textColorClass = pathname === '/' 
    ? 'text-gray-800'
    : 'text-gray-800 dark:text-white';

  const menuItems = [
    { item: "About", href: "/about", links: [
      { href: "/about/fidas", text: "What is FIDAS" },
      { href: "/about/company", text: "About Us" },
      { href: "/about/info", text: "Company Information" }
    ]},
    { item: "Products", href: "/products", links: [
      { href: "/products/software", text: "Associated Software Products" },
      { href: "/products/technologies", text: "Technologies" },
      { href: "/products/hardware", text: "Hardware Products" },
      { href: "/products/sap-integration", text: "SAP Integration" }
    ]},
    { item: "Services", href: "/services", links: [
      { href: "/services/how-it-works", text: "How Does It Work" },
      { href: "/services/implementation", text: "Implementation Methodology" },
      { href: "/services/benefits", text: "Benefits of FIDAS" }
    ]},
    { item: "Customers", href: "/customers", links: [
      { href: "/customers/success", text: "Customer Success" },
      { href: "/customers/list", text: "Customer List" }
    ]},
    { item: "Resources", href: "/resources", links: [
      { href: "/resources/blogs", text: "Blogs" },
      { href: "/resources/faq", text: "FAQ / Q & A" },
      { href: "/resources/downloads", text: "Downloads" }
    ]},
    { item: "Contact", href: "/contact", links: [
      { href: "/contact/us", text: "Contact Us" },
      { href: "/contact/social", text: "Social Media" },
      { href: "/contact/enquiry", text: "Enquiry" }
    ]}
  ];

  return (
    <div className={`flex justify-center ${isMobile ? 'flex-col w-full space-y-2' : 'flex-row items-center space-x-4'} ${textColorClass}`}>
      {isMobile ? (
        menuItems.map((menuItem, index) => (
          <Link key={index} href={menuItem.href} onClick={() => handleLinkClick(menuItem.href)} className="text-lg py-1">
            {menuItem.item}
          </Link>
        ))
      ) : (
        <Menu setActive={setActive}>
          {menuItems.map((menuItem, index) => (
            <MenuItem 
              key={index} 
              setActive={setActive} 
              active={active} 
              item={menuItem.item}
              href={menuItem.href}
              onItemClick={() => handleLinkClick(menuItem.href)}
              isMobile={isMobile}
            >
              <div className="flex flex-col space-y-1 min-w-[220px]">
                {menuItem.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="flex items-center justify-between">
                    <HoveredLink 
                      href={link.href} 
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.text}
                    </HoveredLink>
                    {loading === link.href && <SmallLoader />}
                  </div>
                ))}
              </div>
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
}