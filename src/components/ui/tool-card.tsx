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
}

export default function ToolCard({ title, description, icon: IconComponent, isLoading, className, iconColorClassName = "text-primary" }: ToolCardProps) {
  if (isLoading) {
    return (
      <Card className="bg-neutral-800 shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-1 w-full h-full min-h-[180px]">
        <CardHeader className="items-center text-center">
          <Skeleton className="h-8 w-8 rounded-full mb-2" />
          <Skeleton className="h-6 w-3/4" />
        </CardHeader>
        <CardContent className="text-center">
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-neutral-800 shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-1 w-full h-full flex flex-col ${className}`}>
      <CardHeader className="items-center text-center pt-6 pb-2">
        {IconComponent && (
          <div className={`mb-3 ${iconColorClassName}`}>
            <IconComponent className="w-10 h-10" />
          </div>
        )}
        <CardTitle className="text-neutral-100 text-xl font-semibold font-display">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center pb-6 flex-grow">
        {description && (
          <CardDescription className="text-neutral-300 text-sm">
            {description}
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
}
