"use client"; // Necessário para o botão do menu funcionar
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="site-nav border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          {/* Logo */}
          <div>
            <Link href="/" id="logo">
              <img src="/imagens/JD-logo-Sem Fundo.png" alt="Logo Deco" />
            </Link>
          </div>

          {/* Botões Mobile (Carrinho + Login) */}
          <div className="flex items-center gap-2 md:hidden">
            <button className="btn-carrinho p-2 text-gray-700 hover:text-green-600">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span id="carrinho-badge" className="carrinho-badge">0</span>
            </button>
            <Link href="/login" className="px-3 py-2 bg-green-600 text-white rounded text-sm font-medium">
              <i className="fas fa-sign-in-alt mr-1"></i>
            </Link>
            
            {/* Botão Menu Hambúrguer */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>

          {/* Menu Desktop e Mobile (Controlado pelo State) */}
          <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <div className="flex items-center justify-between flex-col md:flex-row">
              <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 w-full md:w-auto">
                <li><Link href="/#sobre" className="block py-2 px-3 text-gray-700 hover:text-green-600 md:p-0">Sobre</Link></li>
                <li><Link href="/#produtos" className="block py-2 px-3 text-gray-700 hover:text-green-600 md:p-0">Produtos</Link></li>
                <li><Link href="/#destaque" className="block py-2 px-3 text-gray-700 hover:text-green-600 md:p-0">Destaque</Link></li>
                <li><Link href="/#contato" className="block py-2 px-3 text-gray-700 hover:text-green-600 md:p-0">Contato</Link></li>
              </ul>

              {/* Botões Desktop (Carrinho + Login) */}
              <div className="hidden md:flex items-center gap-3 ml-8">
                <div className="carrinho-container relative">
                  <button className="btn-carrinho flex items-center gap-2 p-2 text-gray-700 hover:text-green-600 transition-colors">
                    <i className="fas fa-shopping-cart text-xl"></i>
                    <span className="font-medium">Carrinho</span>
                    <span className="carrinho-badge">0</span>
                  </button>
                </div>
                <Link href="/login" className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-green-700 transition">
                  <i className="fas fa-sign-in-alt"></i>
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}