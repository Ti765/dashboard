import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Filter, Settings } from 'lucide-react';
import SaturnIcon from '@/components/icons/saturn-icon';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-700 bg-neutral-900/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <SaturnIcon className="h-8 w-8" />
          <span className="font-display text-xl font-bold text-neutral-100">FiscalFlux</span>
        </Link>

        <nav className="hidden flex-1 items-center space-x-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href="#contas" className="text-neutral-100 hover:text-primary-300">Contas</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#reports" className="text-neutral-100 hover:text-primary-300">Relatórios</Link>
          </Button>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" className="hidden text-neutral-100 hover:text-primary-300 md:flex">
            <Filter className="h-5 w-5" />
            <span className="sr-only">Filtro</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden text-neutral-100 hover:text-primary-300 md:flex">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Configurações</span>
          </Button>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-100">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] bg-neutral-900 border-neutral-700">
                <div className="flex flex-col space-y-4 p-6">
                  <Link href="#contas" className="text-neutral-100 hover:text-primary-300">Contas</Link>
                  <Link href="#reports" className="text-neutral-100 hover:text-primary-300">Relatórios</Link>
                  <Button variant="ghost" className="w-full justify-start text-neutral-100 hover:text-primary-300">
                    <Filter className="mr-2 h-5 w-5" />
                    Filtro
                  </Button>
                   <Button variant="ghost" className="w-full justify-start text-neutral-100 hover:text-primary-300">
                    <Settings className="mr-2 h-5 w-5" />
                    Configurações
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
