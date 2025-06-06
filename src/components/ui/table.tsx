import clsx from "clsx";

export const Table = ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
  <div className="overflow-x-auto">
    <table className={clsx("w-full text-left text-sm", className)} {...props} />
  </div>
);
export const TableHead = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={clsx("text-fg-muted", className)} {...props} />
);
export const TableRow = ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={clsx("border-b border-bg-faint", className)} {...props} />
);
export const TableCell = ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
  <td className={clsx("py-2 px-4", className)} {...props} />
);
