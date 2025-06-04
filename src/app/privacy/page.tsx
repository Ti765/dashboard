import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Header />
      <main className="flex-grow w-full mx-auto px-6 py-12 2xl:max-w-none">
        <h1 className="font-display text-4xl font-bold text-neutral-100 mb-8">Política de Privacidade</h1>
        <div className="prose prose-invert max-w-none text-neutral-300 space-y-4">
          <p>Sua privacidade é importante para nós. É política do FiscalFlux respeitar sua privacidade em relação a qualquer informação sua que possamos coletar no site FiscalFlux, e outros sites que possuímos e operamos.</p>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
          <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
          <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
          <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
          <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
          <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
          <h2 className="font-display text-2xl font-semibold text-neutral-100 mt-6">Compromisso do Usuário</h2>
          <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o FiscalFlux oferece no site e com caráter enunciativo, mas não limitativo:</p>
          <ul>
            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre apostas online (ex.: Betano), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do FiscalFlux, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
          </ul>
          <h2 className="font-display text-2xl font-semibold text-neutral-100 mt-6">Mais informações</h2>
          <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
          <p>Esta política é efetiva a partir de [Data Atual].</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
