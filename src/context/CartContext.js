'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Novo: controla se a gaveta está visível

  // Carregar carrinho do LocalStorage ao iniciar (para não perder dados ao atualizar a página)
  useEffect(() => {
    const savedCart = localStorage.getItem('jaguaribe_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Salvar no LocalStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem('jaguaribe_cart', JSON.stringify(cart));
  }, [cart]);

  // 1. Adicionar Item
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      
      // Se já existe, aumenta a quantidade
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      // Se não existe, abre a gaveta para mostrar que adicionou
      setIsCartOpen(true); 
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen); 
  const closeCart = () => setIsCartOpen(false); 

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        cartCount, 
        cartTotal,
        isCartOpen,
        toggleCart,
        closeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}