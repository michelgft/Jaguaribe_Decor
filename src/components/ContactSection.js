'use client';

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-display mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tem dúvidas ou sugestões? Entre em contato conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Coluna 1: Formulário */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-display">
              Envie sua mensagem
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-gray-700 text-sm font-medium mb-2">
                  Seu nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome completo"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Seu e-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemplo@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-gray-700 text-sm font-medium mb-2">
                  Sua mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="6"
                  placeholder="Digite sua mensagem aqui..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Coluna 2: Mapa e informações */}
          <div className="space-y-8">
            
            {/* Mapa */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-display">
                  Nossa Localização
                </h3>
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9173254617244!2d-34.87604522610894!3d-7.135558969986364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace810852ae4f1%3A0xaf5445223401f2bb!2sIFPB%20-%20Campus%20Jo%C3%A3o%20Pessoa!5e0!3m2!1spt-BR!2sbr!4v1737316018999!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 md:h-80"
                    title="Nossa localização no mapa"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Informações de contato rápidas */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-display">
                Informações
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Endereço</p>
                    <p className="text-gray-600">João Pessoa, PB - Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Telefone</p>
                    <p className="text-gray-600">(81) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">E-mail</p>
                    <p className="text-gray-600">contato@jaguaribedecor.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 text-sm">
                  <span className="font-medium text-gray-800">Horário de atendimento:</span> Segunda a Sexta, das 9h às 18h
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Respondemos em até 24 horas úteis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mensagem final */}
        <div className="mt-16 text-center">
          <div className="bg-green-50 border border-green-100 rounded-xl p-6 inline-block">
            <p className="text-gray-700 font-medium">
            Sua opinião é muito importante para nós!
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Estamos sempre buscando melhorar nossa coleção e atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}