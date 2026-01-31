'use client';

import { useCart } from '../context/CartContext';
import Link from 'next/link';

// NOTA: Removi a palavra 'default' para evitar conflitos de importação
export function ProductCard({ produto }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      
      {/* 1. IMAGEM DO PRODUTO (Com Link para Detalhes) */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {/* Link dinâmico para a página de detalhes */}
        <Link href={`/produto/${produto.id}`}>
            <img
            src={produto.image_url}
            alt={produto.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
        </Link>
      </div>

      {/* 2. CONTEÚDO DO CARD */}
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/produto/${produto.id}`}>
            <h3 className="text-lg font-bold text-gray-800 mb-1 font-display hover:text-green-600 transition-colors cursor-pointer">
            {produto.name}
            </h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
          {produto.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Preço</span>
            <span className="text-xl font-bold text-green-700">
              R$ {produto.price.toFixed(2)}
            </span>
          </div>

          {/* 3. BOTÃO COMPRAR */}
          <button
            onClick={() => addToCart(produto)}
            className="bg-gray-900 hover:bg-green-600 text-white p-3 rounded-full transition-colors shadow-lg shadow-gray-200 hover:shadow-green-200 active:scale-95"
            title="Adicionar ao Carrinho"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}