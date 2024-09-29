import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import { Twitter, FacebookIcon, InstagramIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-sm">
              Professional grade fabric inspection software with successful track record with rich 17 years
              of domain experience. Thanks to our R&D efforts, we have successfully developed
              almost every IOT devices which automatically fetches fabric quality related data to our
              software.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/about/fidas" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/products/software" className="hover:text-blue-400">Products</Link></li>
              <li><Link href="/services/how-it-works" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="/contact/us" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Grey Inspection</li>
              <li>Finish Fabric</li>
              <li>Denim Fabric</li>
              <li>RMG</li>
              <li>Process</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
            <Link href="mailto:regi@fidas.in" className="flex items-center hover:text-blue-400">
              <Mail size={18} className="mr-2" />
              <span>regi@fidas.in</span>
            </Link>
            <Link href="tel:+919962936356" className="flex items-center hover:text-blue-400">
              <Phone size={18} className="mr-2" />
              <span>+91 9962936356</span>
            </Link>
            <Link href="#" className="flex items-center hover:text-blue-400">
              <MapPin size={18} className="mr-2" />
              <span>Chennai</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://twitter.com/fidas_in" className="hover:text-blue-400"><Twitter size={20} /></Link>
            <Link href="https://www.facebook.com/fidas.in" className="hover:text-blue-400"><FacebookIcon size={20} /></Link>
            <Link href="https://www.linkedin.com/company/ventura-automation-services/" className="hover:text-blue-400"><Linkedin size={20} /></Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FIDAS. All Rights Reserved. Ventura Automation Services Inc.</p>
        </div>
      </div>
    </footer>
  );
}