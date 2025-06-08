import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ToolCardProps {
  title: string;
  description?: string | React.ReactNode;
  icon?: LucideIcon | React.ElementType; // Allow LucideIcon or any React component
  isLoading?: boolean;
  className?: string;
  iconColorClassName?: string;
  bgGradientVia?: string;
}

export default function ToolCard({ title, description, icon: IconComponent, isLoading, className, iconColorClassName = "text-primary", bgGradientVia = "via-neutral-700" }: ToolCardProps) {
  if (isLoading) {
    return (
      <Card className="bg-neutral-800 shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-1 w-full h-full min-h-44 flex flex-col items-center justify-center">
        <CardHeader className="items-center text-center">
          <Skeleton className="h-[1em] w-8 rounded-full mb-2" />
          <Skeleton className="h-[1em] w-3/4" />
        </CardHeader>
        <CardContent className="text-center">
          <Skeleton className="h-[1em] w-1/2 mx-auto" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={
        `relative overflow-hidden bg-gradient-to-b from-black ${bgGradientVia} to-black ` +
        `shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-1 w-full h-full flex flex-col ${className}`
      }
    >
      {IconComponent && (
        <IconComponent
          className="absolute inset-0 m-auto w-5/6 h-5/6 text-white opacity-5 -z-10"
          style={{ strokeDasharray: "2 2", strokeLinecap: "round", strokeWidth: 1.5, fill: "none" }}
        />
      )}
      <CardHeader className="relative z-10 flex flex-col items-center text-center pt-6 pb-4">
        <CardTitle className="text-neutral-100 text-xl font-semibold font-display">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 text-center pb-6 flex-grow">
        {description && (
          <CardDescription className="text-neutral-300 text-sm">
            {description}
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
}
