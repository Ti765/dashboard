import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import SaturnIcon from "@/components/icons/saturn-icon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-bg-faint bg-transparent backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-fg">
          <SaturnIcon className="h-6 w-6" />
          <span className="font-medium">Fiscal Tools</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="#" className="hover:text-accent">
            Dashboard
          </Link>
          <Link href="#" className="hover:text-accent">
            Reports
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
