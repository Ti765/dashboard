import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Filter, Settings } from 'lucide-react'; // Adicionado Menu
import SaturnIcon from '@/components/icons/saturn-icon';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-700 bg-neutral-900/80 backdrop-blur-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-none flex h-16 items-center justify-between">
        {/* Left Group: Logo and Desktop Nav Links */}
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <SaturnIcon className="h-8 w-8" />
            <span className="font-display text-xl font-bold text-neutral-100">FiscalFlux</span>
          </Link>
          {/* Desktop Navigation Links - hidden on mobile, flex on md+ */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="#contas" className="text-neutral-100 hover:text-primary-300">Contas</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#reports" className="text-neutral-100 hover:text-primary-300">Relatórios</Link>
            </Button>
          </nav>
        </div>

        {/* Right Group: Mobile Menu Trigger and Action Icons */}
        <div className="flex items-center space-x-2">
          {/* Mobile Menu Trigger (Hamburger) - visible on mobile, hidden on md+ */}
          <Button variant="ghost" size="icon" className="md:hidden text-neutral-100 hover:text-primary-300">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>

          {/* Action Icons - Hidden on extra-small screens, visible from sm upwards */}
          <Button variant="ghost" size="icon" className="text-neutral-100 hover:text-primary-300 hidden sm:flex">
            <Filter className="h-5 w-5" />
            <span className="sr-only">Filtro</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-100 hover:text-primary-300 hidden sm:flex">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Configurações</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
      {/* 
        Nota: A funcionalidade completa do menu mobile (exibir os links ao clicar no hambúrguer)
        requereria JavaScript e gerenciamento de estado, que não fazem parte desta alteração.
        Este ajuste lida com a visibilidade responsiva dos elementos.
      */}
    </header>
  );
}
