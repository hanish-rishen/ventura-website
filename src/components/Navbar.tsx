"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X, ChevronDown } from "lucide-react"; // Add ChevronDown import
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from 'next/navigation';
import SmallLoader from './SmallLoader';

interface MenuLink {
  href: string;
  text: string;
}

// Update the MenuColumn interface
interface MenuColumn {
  title: string;
  href: string;
  doubleColumn?: boolean;
  items: MenuLink[]; // Changed from MenuLink[] | [MenuLink[], MenuLink[]] to just MenuLink[]
  image?: {
    src: string;
    alt: string;
  };
}

interface MenuItem {
  item: string;
  href: string;
  links?: MenuLink[];
  columns?: MenuColumn[];
}

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
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Book Demo</span>
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
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});  // Add this state
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

  const toggleMenu = (menuItem: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuItem]: !prev[menuItem]
    }));
  };

  const textColorClass = pathname === '/' 
    ? 'text-gray-800'
    : 'text-gray-800 dark:text-white';

  const menuItems: MenuItem[] = [
    { 
      item: "Solutions", 
      href: "/services", 
      columns: [
        {
          title: "How It Works",
          href: "/services/how-it-works",
          items: [],  // Remove bullet points by leaving items empty
          image: {
            src: "/images/how-it-works.jpg",
            alt: "How FIDAS Works"
          }
        },
        {
          title: "Implementation",
          href: "/services/implementation",
          items: [],  // Remove bullet points by leaving items empty
          image: {
            src: "/images/implementation.jpg",
            alt: "Implementation Methodology"
          }
        },
        {
          title: "Benefits",
          href: "/services/benefits",
          items: [],  // Remove bullet points by leaving items empty
          image: {
            src: "/images/benefits.jpg",
            alt: "FIDAS Benefits"
          }
        }
      ]
    },
    { item: "Products", href: "/products", columns: [
      {
        title: "Hardware Products",
        href: "/products/hardware",
        items: [
          { href: "/products/hardware/fabric-length-counter", text: "Fabric Length Measurement" },
          { href: "/products/hardware/width-measurement-system", text: "Width Measurement System" },
          { href: "/products/hardware/digital-pick-counter", text: "Digital Pick Counter" },
          { href: "/products/hardware/gsm-capturing", text: "GSM Capturing" },
          { href: "/products/hardware/barcode-scanning-printing", text: "Barcode Scanning" },
          { href: "/products/hardware/defect-stickering-system", text: "Defect Stickering" },
          { href: "/products/hardware/touchscreen-monitor", text: "Touch Screen Monitor" },
          { href: "/products/hardware/heat-fuse-labeling-machine", text: "Heat Fuse Labeling" },
        ]
      },
      {
        title: "Software Products",
        href: "/products/software",
        items: [
          { href: "/products/software?product=knitted-fabric-inspection", text: "Knitted Fabric Inspection" },
          { href: "/products/software?product=greige-fabric-inspection", text: "Greige Fabric Inspection" },
          { href: "/products/software?product=denim-fabric-inspection", text: "Denim Fabric Inspection" },
          { href: "/products/software?product=automotive-fabric-inspection", text: "Automotive Fabric Inspection" },
          { href: "/products/software?product=home-furnishing-inspection", text: "Home Furnishing Inspection" },
          { href: "/products/software?product=garment-units-inspection", text: "Garment Units Inspection" },
        ]
      },
      {
        title: "Other Solutions",
        href: "/products/technologies",
        items: [
          { href: "/products/technologies", text: "Technologies" },
          { href: "/products/sap-integration", text: "SAP Integration" },
        ]
      }
    ]},
    { item: "Resources", href: "/resources", links: [
      { href: "/resources/blogs", text: "Blogs" },
      { href: "/resources/faq", text: "FAQ / Q & A" },
      { href: "/resources/downloads", text: "Downloads" },
      { href: "/customers/list", text: "Customer List" },
      { href: "/customers/success", text: "Success Stories" }
    ]},
    { item: "About", href: "/about", links: [
      { href: "/about/fidas", text: "What is FIDAS" },
      { href: "/about/company", text: "About Us" },
      { href: "/about/info", text: "Company Information" }
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
        <div className="space-y-2">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="space-y-2">
              <button 
                onClick={() => toggleMenu(menuItem.item)}
                className="w-full text-left text-lg py-1 flex items-center justify-between hover:text-blue-600 transition-colors focus:outline-none"
              >
                {menuItem.item}
                <motion.div
                  animate={{ rotate: openMenus[menuItem.item] ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400"
                >
                  <ChevronDown size={18} strokeWidth={2} className="focus:outline-none" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openMenus[menuItem.item] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-2"
                  >
                    {/* Rest of the mobile menu content */}
                    {menuItem.links?.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        onClick={() => {
                          handleLinkClick(link.href);
                          toggleMenu(menuItem.item); // Changed from setIsOpen
                        }}
                        className="block py-1 text-sm"
                      >
                        {link.text}
                      </Link>
                    ))}
                    {menuItem.columns?.map((column, colIndex) => (
                      <div key={colIndex} className="space-y-2">
                        <Link
                          href={column.href}
                          onClick={() => {
                            handleLinkClick(column.href);
                            toggleMenu(menuItem.item); // Changed from setIsOpen
                          }}
                          className="block font-semibold py-1"
                        >
                          {column.title}
                        </Link>
                        <div className="pl-4 space-y-2">
                          {(column.items as MenuLink[]).map((link, linkIndex) => (
                            <Link
                              key={linkIndex}
                              href={link.href}
                              onClick={() => {
                                handleLinkClick(link.href);
                                toggleMenu(menuItem.item); // Changed from setIsOpen
                              }}
                              className="block py-1 text-sm"
                            >
                              {link.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
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
              {menuItem.columns ? (
                <div className="relative left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-4 p-4 min-w-[900px] bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  {menuItem.columns.map((column, colIndex) => (
                    <motion.div
                      key={colIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: colIndex * 0.1 }}
                      className={cn(
                        "space-y-3",
                        colIndex === 2 ? "col-span-1" : "",
                        "w-full" // Changed from min/max width constraints
                      )}
                    >
                      {menuItem.item === "Solutions" ? (
                        // Solutions menu - image and title only
                        <Link 
                          href={column.href}
                          className="block space-y-3 hover:opacity-90 transition-opacity"
                        >
                          {column.image && (
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                              <Image
                                src={column.image.src}
                                alt={column.image.alt}
                                fill
                                className="object-fit transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          )}
                          <div className="font-semibold text-lg text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors truncate">
                            {column.title}
                          </div>
                        </Link>
                      ) : (
                        // Products menu - title and bullet points
                        <>
                          <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 border-b border-blue-100 dark:border-blue-800 pb-2">
                            {column.title}
                          </h3>
                          <div className="space-y-2">
                            {column.items?.map((link: MenuLink, linkIndex: number) => ( // Add type annotation here
                              <motion.div
                                key={linkIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: linkIndex * 0.05 }}
                                className="group relative flex items-center whitespace-nowrap pr-2"
                              >
                                <HoveredLink 
                                  href={link.href} 
                                  onClick={() => handleLinkClick(link.href)}
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className="w-1 h-1 rounded-full bg-blue-200 dark:bg-blue-700 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors"></span>
                                    <span className="text-[13px] pr-2">{link.text}</span>
                                  </div>
                                </HoveredLink>
                              </motion.div>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col space-y-1 min-w-[220px]">
                  {menuItem.links?.map((link, linkIndex) => (  // Add optional chaining here
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
              )}
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
}