import clsx from "clsx";

export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={clsx(
      "w-full rounded-md bg-bg-faint px-3 py-2 text-fg placeholder:opacity-50 focus:ring-2 focus:ring-accent",
      className
    )}
    {...props}
  />
);
