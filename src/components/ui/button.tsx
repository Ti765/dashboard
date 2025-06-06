import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import clsx from "clsx";

const button = cva(
  "relative inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition",
  {
    variants: {
      variant: {
        default: "bg-accent text-bg hover:bg-accent-hover",
        ghost: "text-fg hover:bg-bg-faint",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
}
export const Button = ({ className, variant, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : motion.button;
  return <Comp whileTap={{ scale: 0.95 }} className={clsx(button({ variant }), className)} {...props} />;
};
