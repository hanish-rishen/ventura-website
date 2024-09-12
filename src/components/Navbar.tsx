"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';

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
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50`}>
      <nav className={cn(
        "max-w-[98%] mx-auto rounded-full px-6 py-4 mt-4 transition-all duration-300",
        pathname === '/' 
          ? isScrolled 
            ? "bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg" 
            : "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          : "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
      )}>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/Ventura.png" alt="Ventura Logo" width={100} height={40} />
            </Link>
          </div>
          <div className="hidden md:block">
            <NavbarContent pathname={pathname} isScrolled={isScrolled} />
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut",
              opacity: { duration: 0.3 },
              height: { duration: 0.5 }
            }}
            className="md:hidden mt-2 mx-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden"
          >
            <motion.div 
              className="p-6 max-h-[70vh] overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
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

  const handleItemClick = (item: string) => {
    if (isMobile) {
      setActive(active === item ? null : item);
    }
  };

  const handleLinkClick = () => {
    if (isMobile && setIsMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 150);
    }
  };

  const textColorClass = pathname === '/' 
    ? 'text-gray-800'
    : 'text-gray-800 dark:text-white';

  return (
    <div className={`flex ${isMobile ? 'flex-col w-full space-y-2' : 'flex-row items-center space-x-4'} ${textColorClass}`}>
      <Menu setActive={setActive}>
        {[
          { item: "About", links: [
            { href: "/about/fidas", text: "What is FIDAS" },
            { href: "/about/company", text: "About Us" },
            { href: "/about/info", text: "Company Information" }
          ]},
          { item: "Products", links: [
            { href: "/products/software", text: "Associated Software Products" },
            { href: "/products/technologies", text: "Technologies" },
            { href: "/products/hardware", text: "Hardware Products" },
            { href: "/products/sap-integration", text: "SAP Integration" }
          ]},
          { item: "Services", links: [
            { href: "/services/how-it-works", text: "How Does It Work" },
            { href: "/services/implementation", text: "Implementation Methodology" },
            { href: "/services/benefits", text: "Benefits of FIDAS" }
          ]},
          { item: "Customers", links: [
            { href: "/customers/success", text: "Customer Success" },
            { href: "/customers/list", text: "Customer List" }
          ]},
          { item: "Resources", links: [
            { href: "/resources/blogs", text: "Blogs" },
            { href: "/resources/faq", text: "FAQ / Q & A" },
            { href: "/resources/downloads", text: "Downloads" }
          ]},
          { item: "Partners", links: [
            { href: "/partners", text: "Partners" }
          ]},
          { item: "Contact", links: [
            { href: "/contact/us", text: "Contact Us" },
            { href: "/contact/social", text: "Social Media" },
            { href: "/contact/enquiry", text: "Enquiry" }
          ]}
        ].map((menuItem, index) => (
          <MenuItem 
            key={index} 
            setActive={setActive} 
            active={active} 
            item={menuItem.item}
            onClick={() => handleItemClick(menuItem.item)}
            isMobile={isMobile}
          >
            <div className={`flex flex-col ${isMobile ? 'space-y-2' : 'space-y-1'}`}>
              {menuItem.links.map((link, linkIndex) => (
                <HoveredLink 
                  key={linkIndex} 
                  href={link.href} 
                  onClick={handleLinkClick}
                >
                  {link.text}
                </HoveredLink>
              ))}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}