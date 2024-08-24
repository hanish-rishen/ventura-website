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
  onClick?: () => void;
  isMobile: boolean;
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
}: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setActive(item);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isMobile && menuRef.current && !menuRef.current.contains(e.relatedTarget as Node)) {
      setActive(null);
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(active === item);
    }
  }, [active, item, isMobile]);

  return (
    <div 
      ref={menuRef}
      className="w-full relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        onClick={handleClick}
        className="flex items-center justify-between w-full py-2 text-left text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
        whileTap={{ scale: 0.97 }}
      >
        <span>{item}</span>
      </motion.button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          !isMobile ? "absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg" : "",
          isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
        )}
        style={{ minWidth: '200px' }}
      >
        <div className={cn(
          "py-2 transition-all duration-300 ease-in-out",
          !isMobile ? "px-4" : "pl-4",
          isOpen ? "translate-y-0" : "-translate-y-2"
        )}>
          {React.Children.map(children, (child) => (
            <div className="transition-all duration-300 ease-in-out">{child}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const HoveredLink = ({ href, children }: HoveredLinkProps) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
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
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className={cn(
        "max-w-[98%] mx-auto border border-gray-200 dark:border-gray-700 rounded-full shadow-lg px-6 py-4 mt-4 transition-all duration-300",
        isMenuOpen ? "bg-white/50 dark:bg-gray-800/50 backdrop-blur-md" : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
      )}>
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
            className="md:hidden mt-2 mx-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 max-h-[70vh] overflow-y-auto">
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
    <div className={`flex ${isMobile ? 'flex-col w-full space-y-4' : 'flex-row items-center space-x-4'}`}>
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
            <div className={`flex flex-col ${isMobile ? 'space-y-2' : 'space-y-1'}`}>
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