import React from 'react';
import { Award } from 'lucide-react';
import { JSX } from 'react/jsx-runtime';
import Image from "next/image"
const HeroImg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={546}
    height={408}
    viewBox="0 0 546 408"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M532.852 1.74184e-05C552.886 68.1327 549.542 141.01 523.354 207.022C497.166 273.034 449.64 328.384 388.347 364.253C327.054 400.122 255.52 414.447 185.142 404.947C114.763 395.446 49.5882 362.666 -0.000192068 311.829L227.693 89.7285L532.852 1.74184e-05Z"
      fill="#016FC0"
    />
  </svg>
);

const GlobeIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 3C12 3 8 7 8 12C8 17 12 21 12 21" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 3C12 3 16 7 16 12C16 17 12 21 12 21" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 7H19" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 17H19" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function HeroSection() {
  return (
    <div className=" items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-full ">
        <div className="">
          <Image src="/image.png" width={1000} height={1000} alt="Hero Image" className="absolute hidden md:inline z-20 top-[-150px] object-cover object-top" />
          <Image src="/thumbsupman.png" width={500} height={600} alt="Project Manager giving a thumbs up" className="absolute inline md:hidden scale-[0.90] top-[-20%] object-cover " />
          {/* Blue SVG Background - positioned absolutely */}
          {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10" style={{ width: '450px', height: '408px' }}>
            <HeroImg className="w-full relative right-20 top-20 h-full" />
          </div>
        <img
              src="/firstpic.png"
              alt="Project Manager giving a thumbs up"
              className="w-full relative h-full z-15 top-[-40px] object-cover object-top"
            /> */}
          {/* Person Image with Mask - overlaying the blue shape */}
          {/* <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20"
            style={{ 
              width: '450px', 
              height: '600px',
              maskImage: 'url(#heroMask)',
              WebkitMaskImage: 'url(#heroMask)',
            }}
          >
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <mask id="heroMask">
                  <path
                    d="M532.852 1.74184e-05C552.886 68.1327 549.542 141.01 523.354 207.022C497.166 273.034 449.64 328.384 388.347 364.253C327.054 400.122 255.52 414.447 185.142 404.947C114.763 395.446 49.5882 362.666 -0.000192068 311.829L227.693 89.7285L532.852 1.74184e-05Z"
                    fill="white"
                    transform="scale(0.85) translate(40, 70)"
                  />
                </mask>
              </defs>
            </svg>
            <img
              src="/firstpic.png"
              alt="Project Manager giving a thumbs up"
              className="w-full h-full object-cover object-top"
            />
          </div> */}

          {/* Top-left Card - "Trusted by 10000+" */}
          {/* <div className="absolute z-30 top-8 left-0 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 max-w-xs">
            <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
              <GlobeIcon className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-base">Trusted by 10000+</p>
              <p className="text-sm text-gray-600">Students Across the Globe</p>
            </div>
          </div> */}

          {/* Bottom-right Card - "Certified Project Manager" */}
          {/* <div className="absolute z-30 bottom-8 right-0 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 max-w-xs">
            <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-base">Become a Certified</p>
              <p className="text-sm text-gray-600">Project Manager</p>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}