import Link from "next/link";

export default function Home() {
  return (
    <main>
      
      {/* 1. SEÇÃO HERO (Banner Inicial) */}
      <section id="inicio" className="hero relative h-screen flex items-center justify-center text-center text-white">
        {/* A imagem de fundo deve ser controlada pelo CSS na classe .hero, 
            mas se não estiver aparecendo, verifique o globals.css */}
        <div className="hero-content relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-wider">
            JAGUARIBE DECOR
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Transforme seu espaço com elegância e personalidade única
          </p>
          <a href="#produtos" className="btn-primary bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition duration-300 inline-block">
            Ver Coleção
          </a>
        </div>
        <div className="overlay absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* 2. SEÇÃO SOBRE */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full -z-10"></div>
                <img 
                  src="/imagens/04.png" 
                  alt="Sobre Jaguaribe Decor" 
                  className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-50 rounded-full -z-10"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 font-display">
                Nossa Essência
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Na Jaguaribe Decor, acreditamos que cada ambiente conta uma história. 
                Nascemos da paixão por unir o design contemporâneo com a alma 
                brasileira, criando peças que não apenas decoram, mas emocionam.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-leaf text-green-600 text-2xl mb-2"></i>
                  <h3 className="font-bold text-gray-800">Sustentável</h3>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-hand-holding-heart text-green-600 text-2xl mb-2"></i>
                  <h3 className="font-bold text-gray-800">Artesanal</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO PRODUTOS (Placeholder para o Supabase) */}
      <section id="produtos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 font-display mb-4">
              Coleção Exclusiva
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Peças selecionadas para transformar seu ambiente.
            </p>
          </div>

          {/* AQUI VAI ENTRAR O CÓDIGO DO SUPABASE DEPOIS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="p-8 text-center border-2 border-dashed border-gray-300 rounded-lg">
                <i className="fas fa-database text-4xl text-gray-400 mb-4"></i>
                <p className="text-gray-500">
                  Aqui entrarão os produtos vindos do Banco de Dados (Supabase).
                  <br/>
                  <strong>Requisito: Requisição Assíncrona</strong>
                </p>
             </div>
          </div>
          
        </div>
      </section>

      {/* 4. SEÇÃO CONTATO */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 font-display mb-8">
            Vamos Conversar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <i className="fas fa-envelope text-green-600 text-3xl mb-4"></i>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">contato@jaguaribedecor.com</p>
            </div>
            <div className="p-6">
              <i className="fas fa-phone text-green-600 text-3xl mb-4"></i>
              <h3 className="font-bold mb-2">Telefone</h3>
              <p className="text-gray-600">(81) 99999-9999</p>
            </div>
            <div className="p-6">
              <i className="fas fa-map-marker-alt text-green-600 text-3xl mb-4"></i>
              <h3 className="font-bold mb-2">Localização</h3>
              <p className="text-gray-600">Recife, PE</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}