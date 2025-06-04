import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Header />
      <main className="flex-grow w-full mx-auto px-6 py-12 2xl:max-w-none">
        <h1 className="font-display text-4xl font-bold text-neutral-100 mb-8">Termos de Uso</h1>
        <div className="prose prose-invert max-w-none text-neutral-300 space-y-4">
          <p>Bem-vindo ao FiscalFlux!</p>
          <p>Estes termos e condições descrevem as regras e regulamentos para o uso do website FiscalFlux, localizado em [seu-dominio.com].</p>
          <p>Ao acessar este website, presumimos que você aceita estes termos e condições. Não continue a usar FiscalFlux se você não concordar com todos os termos e condições declarados nesta página.</p>
          <h2 className="font-display text-2xl font-semibold text-neutral-100 mt-6">Cookies</h2>
          <p>Empregamos o uso de cookies. Ao acessar FiscalFlux, você concordou em usar cookies em acordo com a Política de Privacidade de FiscalFlux.</p>
          <p>A maioria dos websites interativos usa cookies para nos permitir recuperar os detalhes do usuário para cada visita. Cookies são usados pelo nosso website para habilitar a funcionalidade de certas áreas para facilitar as coisas para as pessoas que visitam nosso website. Alguns de nossos parceiros afiliados/publicitários também podem usar cookies.</p>
          <h2 className="font-display text-2xl font-semibold text-neutral-100 mt-6">Licença</h2>
          <p>Salvo indicação em contrário, FiscalFlux e/ou seus licenciadores detêm os direitos de propriedade intelectual de todo o material em FiscalFlux. Todos os direitos de propriedade intelectual são reservados. Você pode acessar isso de FiscalFlux para seu próprio uso pessoal, sujeito às restrições estabelecidas nestes termos e condições.</p>
          <p>Você não deve:</p>
          <ul>
            <li>Republicar material de FiscalFlux</li>
            <li>Vender, alugar ou sub-licenciar material de FiscalFlux</li>
            <li>Reproduzir, duplicar ou copiar material de FiscalFlux</li>
            <li>Redistribuir conteúdo de FiscalFlux</li>
          </ul>
          <p>Este Acordo terá início na data presente.</p>
          {/* Add more terms as needed */}
          <p>Reservamo-nos o direito de solicitar que você remova todos os links ou qualquer link específico para o nosso Website. Você aprova a remoção imediata de todos os links para o nosso Website mediante solicitação. Também nos reservamos o direito de alterar estes termos e condições e sua política de vinculação a qualquer momento. Ao continuar a vincular-se ao nosso Website, você concorda em estar vinculado e seguir estes termos e condições de vinculação.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
