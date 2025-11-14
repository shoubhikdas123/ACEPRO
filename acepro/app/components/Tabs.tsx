"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// --- 1. The Navigation Items ---
const navItems = [
  { name: 'Overview', id: 'overview' },
  { name: 'Benefits', id: 'benefits' },
  { name: 'Schedules', id: 'schedules' },
  { name: 'Curriculum', id: 'curriculum' },
  { name: 'Instructor', id: 'instructor' },
  { name: 'Reviews', id: 'reviews' },
  { name: "FAQ's", id: 'faqs' },
];

// --- 2. The Sticky Navigation Component ---
export default function StickyCourseNav() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // 1. Create a ref for the header element
  const headerRef = React.useRef<HTMLElement>(null);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActiveTab(id);

    const section = document.getElementById(id);
    if (section) {
      // Use the ref here too for consistency, though not strictly required
      const navBar = headerRef.current;
      const navBarHeight = navBar ? navBar.offsetHeight : 72;

      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navBarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  const [isSticky, setIsSticky] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const instructorsSection = document.getElementById('instructor');
      // 2. Use the ref's current value
      const navBar = headerRef.current; 

      if (!instructorsSection || !navBar) return;

      const navBarHeight = navBar.offsetHeight || 72;
      const sectionTop = instructorsSection.getBoundingClientRect().top;

      // This logic checks when the top of the instructor section
      // is at or above the bottom of the nav bar.
      if (sectionTop <= navBarHeight) {
        if (isSticky) { // Only set state if it changes
          setIsSticky(false);
          console.log('Removing sticky');
        }
      } else {
        if (!isSticky) { // Only set state if it changes
          setIsSticky(true);
          console.log('Adding sticky');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]); // Add isSticky as a dependency

  return (
    // 3. Assign the ref to the header element
    <header
      ref={headerRef} 
      className={
        isSticky
          ? 'sticky top-0 z-50 ml-4 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'w-full border-b ml-4 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }
    >
      <div className="container mx-auto flex h-12 md:h-16 items-center justify-between px-4">
        {/* Mobile Navigation Links - Scrollable */}
        <nav className="flex md:hidden w-full h-12 items-center overflow-x-auto scrollbar-hide gap-4 px-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={cn(
                'pb-1 text-xs font-medium transition-colors hover:text-primary relative whitespace-nowrap flex-shrink-0',
                activeTab === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-sm" style={{ bottom: '-12px' }}></span>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Navigation Links */}
        <nav className="hidden w-[70%] md:flex h-16 items-center justify-between">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={cn(
                'pb-1 text-sm font-medium transition-colors hover:text-primary relative',
                activeTab === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary shadow-sm" style={{ bottom: '-20px' }}></span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className='mr-0 md:mr-32 flex-shrink-0'>
          <Button className='bg-[#016FC0] w-[120px] md:w-[169px] text-xs md:text-base px-3 md:px-6'>View Schedule</Button>
        </div>
      </div>
      
      {/* Hide scrollbar for webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}