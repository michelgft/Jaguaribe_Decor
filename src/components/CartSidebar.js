'use client';

import { useCart } from '../context/CartContext';
import Link from 'next/link';

export function CartSidebar() {
  const { cart, removeFromCart, cartTotal, isCartOpen, closeCart } = useCart();

  return (
    <>
      {/* 1. OVERLAY (Fundo escuro quando abre) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeCart} // Fecha se clicar fora
      />

      {/* 2. SIDEBAR (A gaveta em si) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[100%] sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          
          {/* CABEÇALHO */}
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h2 className="text-xl font-bold text-gray-800 font-display">Seu Carrinho</h2>
            <button onClick={closeCart} className="text-gray-500 hover:text-red-500 transition-colors p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* LISTA DE ITENS (Scrollável) */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                <p>Seu carrinho está vazio.</p>
                <button onClick={closeCart} className="mt-4 text-green-600 font-bold hover:underline">
                  Continuar comprando
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Imagem */}
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                    <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Infos */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm line-clamp-2">{item.name}</h3>
                    <p className="text-gray-500 text-xs mt-1">Qtd: {item.quantity}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-green-700">R$ {item.price.toFixed(2)}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 text-xs font-medium"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RODAPÉ (Total e Botão) */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-2xl font-bold text-green-700">R$ {cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-bold shadow-lg transition-transform active:scale-95">
                Finalizar Compra
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}