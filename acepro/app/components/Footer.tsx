import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Download,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

// --- Data for Footer Links ---
// Defining data separately makes the component cleaner and easier to update.
const contactLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
  { name: "LMS Login", href: "/login" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
  { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
  { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
  { icon: <Youtube className="h-5 w-5" />, href: "#", name: "YouTube" },
];

/**
 * MainFooter
 * A comprehensive footer component with navigation, contact info,
 * partner badges, a newsletter subscription, and social links.
 *
 * NOTE: The complex background swirl from the image is a decorative
 * background image and has been omitted for component clarity.
 * You would add this via CSS to the `.lg:col-span-5` div.
 */
export function MainFooter() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900/50 text-gray-700 dark:text-gray-400">
      <div className="container mx-auto px-4 py-16">
        
        {/* Top Section: Links, Contact, and Badge */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: "Contact" Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Legal Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>
                Email: <a href="mailto:info@aceproconsulting.com" className="text-primary hover:underline">info@aceproconsulting.com</a>
              </p>
              <p>Phone: <strong className="text-gray-800 dark:text-gray-200">+91 81056 89536</strong></p>
              <p>Phone: <strong className="text-gray-800 dark:text-gray-200">+91 98455 46953</strong></p>
              <p>Phone: <strong className="text-gray-800 dark:text-gray-200">+91 94481 08777</strong></p>
              <p className="pt-2">
                463/B, 11th cross, 2nd Phase Girinagar, Bangalore<br />
                PIN: 560085<br />
                India
              </p>
            </div>
          </div>

          {/* Column 4: Badge & Logo */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <img 
              src="/path/to/atp-badge.png" // <-- REPLACE THIS with your image path
              alt="Authorized Training Partner" 
              className="h-28 w-28 mb-4" 
            />
            <p className="font-semibold text-gray-900 dark:text-white">Authorized Training Partner</p>
            <p className="text-sm">Issuer: Project Management Institute</p>
            <img 
              src="/path/to/creadly-badge.png" // <-- REPLACE THIS with your image path
              alt="Provided by Credly" 
              className="h-8 w-auto my-4" 
            />
            <img 
              src="/path/to/acepro-logo.svg" // <-- REPLACE THIS with your image path
              alt="ACEPRO" 
              className="h-10 w-auto" 
            />
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Middle Section: Download & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 py-12">
          
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
              <Download className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Company Deck</p>
              <a href="/path/to/deck.pdf" className="text-primary hover:underline text-sm">
                PDF
              </a>
            </div>
          </div>

          <div className="lg:max-w-md">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">SUBSCRIBE TO OUR NEWS LETTER</h3>
            <p className="text-sm">The latest news, articles, and resources sent to your inbox weekly</p>
          </div>

          <form className="flex w-full lg:w-auto gap-2">
            <Input type="email" placeholder="Enter your email" className="w-full lg:w-80" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8">
          <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
            © 2024 - <strong className="text-gray-900 dark:text-white">Acepro consulting</strong> Brand of Acepert Leadership Pvt Ltd. All rights reserved
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                aria-label={link.name}
                className="hover:text-primary"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;