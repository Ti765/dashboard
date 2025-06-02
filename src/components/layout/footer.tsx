import Link from 'next/link';
import SaturnIcon from '@/components/icons/saturn-icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-700 bg-neutral-900 text-neutral-400">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 py-8 sm:flex-row">
        <div className="flex items-center space-x-2">
          <SaturnIcon className="h-6 w-6 text-neutral-500" />
          <p className="text-sm">
            &copy; {currentYear} FiscalFlux. Todos os direitos reservados.
          </p>
        </div>
        <div className="mt-4 flex space-x-4 sm:mt-0">
          <Link href="/terms" className="text-sm hover:text-neutral-100">
            Termos de Uso
          </Link>
          <Link href="/privacy" className="text-sm hover:text-neutral-100">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
