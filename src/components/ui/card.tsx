import clsx from "clsx";

export const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={clsx("rounded-2xl bg-bg-faint shadow-[0_2px_12px_#0005]", className)}
    {...props}
  />
);
