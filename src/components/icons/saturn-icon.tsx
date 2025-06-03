import type { SVGProps } from 'react';
import { cn } from "@/lib/utils"; // Assuming cn is in lib/utils

const SaturnIcon = (props: SVGProps<SVGSVGElement> & { isAnimated?: boolean; title?: string }) => {
  const { isAnimated, className, title = "FiscalFlux Icon", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={cn("fill-current text-primary", className, isAnimated ? "animate-spin-slow" : "")}
      role="img"
      {...rest}
    >
      <title>{title}</title>
      <defs>
        <style>
          {`
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin-slow 10s linear infinite;
              transform-origin: center;
            }
          `}
        </style>
      </defs>
      <ellipse cx="100" cy="100" rx="60" ry="20" fill="hsl(var(--accent))" transform="rotate(-20 100 100)" />
      <circle cx="100" cy="100" r="30" fill="hsl(var(--primary))" />
      <ellipse cx="100" cy="100" rx="70" ry="25" stroke="hsl(var(--accent-700))" strokeWidth="5" fill="none" transform="rotate(-20 100 100)" />
    </svg>
  );
};

export default SaturnIcon;
