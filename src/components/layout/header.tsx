import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Filter, Settings } from 'lucide-react';
import SaturnIcon from '@/components/icons/saturn-icon';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-700 bg-neutral-900/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Group */}
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <SaturnIcon className="h-8 w-8" />
            <span className="font-display text-xl font-bold text-neutral-100">FiscalFlux</span>
          </Link>
          <nav className="flex items-center space-x-4"> {/* Always flex */}
            <Button variant="ghost" asChild>
              <Link href="#contas" className="text-neutral-100 hover:text-primary-300">Contas</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#reports" className="text-neutral-100 hover:text-primary-300">Relatórios</Link>
            </Button>
          </nav>
        </div>

        {/* Right Group */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-neutral-100 hover:text-primary-300 flex"> {/* Always flex */}
            <Filter className="h-5 w-5" />
            <span className="sr-only">Filtro</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-100 hover:text-primary-300 flex"> {/* Always flex */}
            <Settings className="h-5 w-5" />
            <span className="sr-only">Configurações</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
