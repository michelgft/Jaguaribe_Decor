export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Linha principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Coluna 1 - Logo e descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold tracking-tight font-display">
                Jaguaribe<span className="text-green-400">Decor</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Sofisticação e exclusividade para o seu lar. Peças únicas que transformam ambientes em experiências memoráveis.
            </p>
          </div>
          
          {/* Coluna 2 - Links rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white font-display">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Coleção
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Contato
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white font-display">Contato</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>contato@jaguaribedecor.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>(81) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>João Pessoa, PB - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Linha inferior - Direitos autorais e redes sociais */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Direitos autorais */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Jaguaribe Decor. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Desenvolvido com paixão por design e qualidade.
            </p>
          </div>
          
          {/* Redes sociais - Mantido do footer antigo */}
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </a>
            
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </a>
            
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
              aria-label="Pinterest"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Informações adicionais */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            As imagens são meramente ilustrativas. As especificações dos produtos podem ser alteradas sem aviso prévio.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Formas de pagamento: Cartões de crédito, PIX, Boleto bancário
          </p>
        </div>
      </div>
    </footer>
  );
}