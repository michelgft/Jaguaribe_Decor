'use client';

import { createContext, useContext, useState } from 'react';

// 1. Cria o canal de comunicação
const CartContext = createContext();

// 2. Cria o componente que vai "abraçar" o site e fornecer os dados
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Função para adicionar produto
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verifica se o produto já está no carrinho
      const itemExists = prevCart.find((item) => item.id === product.id);

      if (itemExists) {
        // Se já existe, só aumenta a quantidade (+1)
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Se é novo, adiciona ele com quantidade 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Conta quantos itens tem no total (ex: 2 cadeiras + 1 mesa = 3 itens)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Hook para facilitar o uso nos outros arquivos
export function useCart() {
  return useContext(CartContext);
}