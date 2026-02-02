'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext'; 
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    setMenuAberto(false);
    router.push('/');
    router.refresh();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Link href="/" className="text-2xl font-bold text-gray-800 tracking-tight font-display">
              Jaguaribe<span className="text-green-600">Decor</span>
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Início</Link>
            <Link href="/#produtos" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Coleção</Link>
            <Link href="/#sobre" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Sobre</Link>
            <Link href="/#contato" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Contato</Link>
          </div>

          <div className="flex items-center gap-6">
            
            {/* LÓGICA DE LOGIN / PERFIL (DESKTOP) */}
            {!loading && (
              <div className="hidden md:flex items-center">
                {user ? (
                  <div className="flex items-center gap-4 border-r border-gray-100 pr-4">
                    <Link href="/perfil" className="flex items-center gap-2 group">
                      <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold group-hover:bg-green-600 group-hover:text-white transition-all text-xs">
                        {user.user_metadata?.full_name?.charAt(0) || 'U'}
                      </div>
                      <span className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">Meu Perfil</span>
                    </Link>
                    <button onClick={handleLogout} className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors uppercase">Sair</button>
                  </div>
                ) : (
                  <Link href="/login" className="flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span>Entrar</span>
                  </Link>
                )}
              </div>
            )}

            {/* BOTÃO CARRINHO */}
            <button onClick={toggleCart} className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* HAMBURGER MOBILE */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuAberto(!menuAberto)} className="text-gray-600 hover:text-green-600 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuAberto ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MENU MOBILE COM LÓGICA DE USER */}
      {menuAberto && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            <Link href="/" onClick={() => setMenuAberto(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600">Início</Link>
            <Link href="/#produtos" onClick={() => setMenuAberto(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600">Coleção</Link>
            
            <hr className="border-gray-100 my-2" />
            
            {!loading && (
              <>
                {user ? (
                  <>
                    <Link href="/perfil" onClick={() => setMenuAberto(false)} className="block px-3 py-2 text-base font-bold text-green-600">Meu Perfil</Link>
                    <button onClick={handleLogout} className="text-left px-3 py-2 text-base font-medium text-red-500">Sair</button>
                  </>
                ) : (
                  <Link href="/login" onClick={() => setMenuAberto(false)} className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-700">
                    <span>Entrar</span>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}