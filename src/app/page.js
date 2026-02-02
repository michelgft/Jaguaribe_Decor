'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';
import ContactSection from "../components/ContactSection";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('products') 
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error("Erro Supabase:", error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* --- HERO SECTION PREMIUM --- */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* 1. Imagem de Fundo (Se tiver uma imagem local, troque o src abaixo por '/sua-imagem.jpg') */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
            alt="Interior Design" 
            className="w-full h-full object-cover"
          />
          {/* Máscara escura para o texto brilhar */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 2. Conteúdo do Hero */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-6">
            Nova Coleção 2025
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display leading-tight drop-shadow-lg">
            Design que transforma <br />
            sua casa em <span className="text-green-400">lar</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            Móveis e decorações selecionados para trazer conforto, sofisticação e personalidade para cada ambiente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#produtos" 
              className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-xl hover:shadow-green-500/30"
            >
              Ver Produtos
            </a>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-lg font-bold py-4 px-10 rounded-full transition-colors border border-white/30">
              Nossa História
            </button>
          </div>
        </div>
      </div>
      {/* --- FIM DO HERO --- */}

      <div id="produtos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6 gap-4">
          <div>
            <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Catálogo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-display">
              Destaques da Semana
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base">
            Explore nossa seleção exclusiva de itens que unem funcionalidade e estética impecável.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white h-96 rounded-xl animate-pulse bg-gray-200"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product) => (
              <Link href={`/produto/${product.id}`} key={product.id} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
                  
                  {/* Imagem do Card */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                    <img 
                      src={product.image_url} 
                      alt={product.name} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {product.original_price > product.price && (
                       <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                         OFERTA
                       </span>
                    )}
                  </div>

                  {/* Texto do Card */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight group-hover:text-green-700 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        {product.original_price > product.price && (
                          <span className="text-xs text-gray-400 line-through">
                            R$ {product.original_price.toFixed(2)}
                          </span>
                        )}
                        <span className="text-xl font-bold text-gray-900">
                          R$ {product.price.toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado.</p>
          </div>
        )}

      </div>
      <ContactSection />
    </main>
  );
}