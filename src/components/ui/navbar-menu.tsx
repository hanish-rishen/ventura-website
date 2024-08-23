"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children: React.ReactNode;
}

interface HoveredLinkProps {
  href: string;
  children: React.ReactNode;
}

export const MenuItem = ({ 
  setActive, 
  active, 
  item, 
  children,
  onClick,
  isMobile
}: MenuItemProps & { onClick: () => void, isMobile: boolean }) => {
  return (
    <div 
      className={`relative ${isMobile ? 'w-full' : ''}`}
      onMouseEnter={() => !isMobile && setActive(item)}
      onMouseLeave={() => !isMobile && setActive(null)}
      onClick={onClick}
    >
      <motion.p
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white py-2"
      >
        {item}
      </motion.p>
      <AnimatePresence>
        {(active === item || (isMobile && active === item)) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`${
              isMobile ? 'relative w-full mt-2' : 'absolute top-full left-0 mt-2'
            } bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden`}
            style={{ 
              width: isMobile ? '100%' : '200px',
              zIndex: 50
            }}
          >
            <div className={`py-2 ${isMobile ? 'px-4' : ''}`}>
              {React.Children.map(children, (child, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`py-2 ${!isMobile ? 'px-4' : ''}`}
                >
                  {child}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HoveredLink = ({ href, children }: HoveredLinkProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="block w-full text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white"
      >
        {children}
      </Link>
    </motion.div>
  );
};

export const Menu = ({ children, setActive }: { children: React.ReactNode; setActive: (item: string | null) => void }) => {
  return (
    <nav className="relative">
      <ul className="flex flex-col md:flex-row md:space-x-4">
        {children}
      </ul>
    </nav>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4">
      <nav className="max-w-[98%] mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Image src="/images/ventura.png" alt="Ventura Logo" width={100} height={40} />
          </div>
          <div className="hidden md:block">
            <NavbarContent />
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4 max-h-[60vh] overflow-y-auto">
              <NavbarContent isMobile={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavbarContent({ isMobile = false }) {
  const [active, setActive] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    if (isMobile) {
      setActive(active === item ? null : item);
    }
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col w-full space-y-2' : 'flex-row items-center space-x-4'}`}>
      <Menu setActive={setActive}>
        {[
          { item: "About", links: [
            { href: "/about/fidas", text: "What is FIDAS" },
            { href: "/about/company", text: "About Us" },
            { href: "/about/info", text: "Company Information" }
          ]},
          { item: "Products", links: [
            { href: "/products/software", text: "Associated Software Products" },
            { href: "/products/technologies", text: "Technologies" }
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
            <div className={`flex flex-col ${isMobile ? 'space-y-2' : 'space-y-3'} text-sm`}>
              {menuItem.links.map((link, linkIndex) => (
                <HoveredLink key={linkIndex} href={link.href}>{link.text}</HoveredLink>
              ))}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}