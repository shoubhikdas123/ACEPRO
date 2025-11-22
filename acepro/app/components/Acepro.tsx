import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Video,
  FileText,
  TrendingUp,
  Award,
  Globe,
  Briefcase,
  Users,
  MapPin,
  GraduationCap,
  Building,
  Icon,
} from 'lucide-react';
import AceProLogo1 from '@/components/ui/aceprologo1';
import Aceprologo2 from '@/components/ui/aceprologo2';
import Aceprologo3 from '@/components/ui/aceprologo3';
import Aceprologo7 from '@/components/ui/aceprologo7';
import AceproLogo4 from '@/components/ui/aceprologo4';
import Aceprologo5 from '@/components/ui/aceprologo5';
import Aceprologo6 from '@/components/ui/aceprologo6';

// --- Data for the features grid ---
// Using an array of objects to keep the component JSX clean.
// We'll use lucide-react icons as placeholders for the custom icons.
const edgeFeatures = [
  {
    id: 1,
    icon: <AceProLogo1 className="h-6 w-6" />,
    text: "Learn from Industry Experts",
  },
  {
    id: 2,
    icon: <Aceprologo2 className="h-6 w-6" />,
    text: "Customized Learning Paths",
  },
  {
    id: 3,
    icon: <Aceprologo3 className="h-6 w-6" />,
    text: "Proven Track Record of Success",
  },
  {
    id: 4,
    icon: <AceproLogo4 className="h-6 w-6" />,
    text: "Achievements Rate of 94%",
  },
  {
    id: 5,
    icon: <Aceprologo5 className="h-6 w-6" />,
    text: "Global Presence & Perspective",
  },
  {
    id: 6,
    icon: <Aceprologo6 className="h-6 w-6" />,
    text: "Practical Approach to Learning",
  },
  {
    id: 7,
    icon: <Aceprologo7 className="h-6 w-6" />,
    text: "Client Centric Focus",
  },
  {
    id: 8,
    icon: <MapPin className="h-6 w-6" />,
    text: "Presence in 41+ countries",
  },
  {
    id: 9,
    icon: <GraduationCap className="h-6 w-6" />,
    text: "10000+ happy students",
  },
  {
    id: 10,
    icon: <Building className="h-6 w-6" />,
    text: "100+ successful corporate workshops",
  },
];


interface FeatureItemProps {
  icon: React.ReactElement;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => (
  <div className="flex flex-col">
    {/* Icon Container: Styled to match the light green rounded box */}
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
      {icon}
    </div>
    {/* Text */}
    <p className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
      {text}
    </p>
  </div>
);

/**
 * AceproEdgeSection
 * The main section component for "Acepro Edge".
 * Uses React, TailwindCSS, and shadcn/ui Card.
 */
export function AceproEdgeSection() {
  return (
    // Section wrapper with padding and a light background
    <section className="my-16 rounded-[20px] bg-[#F6F6F6] dark:bg-slate-950">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-[24px] pt-[24px] md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Acepro Edge
        </h2>

        {/* Main Content Card */}
        <Card className="rounded-2xl mb-[24px]  scale-[0.97] shadow-xl">
          <CardContent className="p-8 md:p-12">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
              {edgeFeatures.map((feature) => (
                <FeatureItem
                  key={feature.id}
                  icon={feature.icon}
                  text={feature.text}
                />
              ))}
            </div>
          </CardContent>
        </Card>
        
      </div>
    </section>
  );
}

export default AceproEdgeSection;