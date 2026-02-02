'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import ContactSection from "../components/ContactSection";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('Todos');
  const { addToCart } = useCart();

  const categorias = ['Todos', 'Sala', 'Cozinha', 'Quarto', 'Jardim'];

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true });

      if (!error) {
        setProducts(data || []);
        setFilteredProducts(data || []);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  // Lógica de Filtro
  useEffect(() => {
    if (category === 'Todos') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      setFilteredProducts(filtered);
    }
  }, [category, products]);

  const renderCard = (product) => (
    <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img src={product.image_url} alt={product.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs font-bold text-green-600 uppercase mb-1">{product.category}</p>
        <h3 className="font-bold text-gray-900 text-lg mb-4 line-clamp-1">{product.name}</h3>
        <div className="mt-auto">
          <span className="text-xl font-bold text-gray-900 block mb-4">
            R$ {Number(product.price).toFixed(2).replace('.', ',')}
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => addToCart(product)} className="bg-gray-900 text-white text-xs font-bold py-2 rounded-lg hover:bg-green-600 transition-colors">
              + Carrinho
            </button>
            <Link href={`/produto/${product.id}`} className="bg-gray-100 text-gray-700 text-xs font-bold py-2 rounded-lg text-center hover:bg-gray-200 transition-colors">
              Detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative h-[500px] flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000" className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Jaguaribe Decor</h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">Sua casa com a personalidade que ela merece.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Coleção Completa</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  category === cat 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-200' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-green-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-80 bg-gray-200 animate-pulse rounded-2xl" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => renderCard(product))}
          </div>
        )}
      </section>

      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Destaques da Semana</h2>
              <p className="text-gray-500">Os itens mais desejados da Jaguaribe.</p>
            </div>
            <span className="h-1 w-20 bg-green-600 hidden md:block"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(product => renderCard(product))}
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}