'use client';

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"; 
import { ProductCard } from "../components/ProductCard";
import ContactSection from "../components/ContactSection"; 

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('produtos').select('*');

        if (error) {
          console.error("Erro Supabase:", error);
        } else {
          setProdutos(data || []); 
        }
      } catch (err) {
        console.error("Erro geral:", err);
      } finally {
        setLoading(false);
      }
    }

    buscarProdutos();
  }, []);

  return (
    <main className="bg-white">
      

      <section id="inicio" className="min-h-[70vh] flex items-center justify-center py-10 bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="w-full md:w-[60%] flex flex-col justify-center text-left pl-4 md:pl-0 z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight font-display mb-4">
              Sofisticação e <br />
              <span className="text-green-600 italic">exclusividade</span> <br />
              para o seu lar.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md mb-6">
              Jaguaribe Decor, onde o design e a funcionalidade se encontram.
            </p>
            <div>
              <a 
                href="#produtos" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-base font-medium transition duration-300 shadow-md inline-block"
              >
                Ver Coleção
              </a>
            </div>
          </div>

          <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-[280px]"> 
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-50 rounded-full -z-10"></div>

              <img 
                src="/imagens/cactoelement03.png" 
                alt="Boas-vindas Jaguaribe Decor" 
                className="rounded-2xl shadow-lg w-full h-auto object-contain"
              />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gray-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>


      <section id="sobre" className="py-20 bg-white border-t border-gray-50">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full -z-10"></div>
                <img 
                  src="/imagens/04.png" 
                  alt="Sobre Jaguaribe Decor" 
                  className="rounded-lg shadow-xl w-full object-cover h-[450px]"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 font-display">
                Nossa Essência
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Na Jaguaribe Decor, acreditamos que cada ambiente conta uma história. 
                Nascemos da paixão por unir o design contemporâneo com a alma 
                brasileira.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="produtos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-display mb-3">
              Coleção Exclusiva
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Peças selecionadas diretamente do nosso acervo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             
             {loading && (
                <div className="col-span-full text-center py-20">
                  <p className="text-green-600 text-xl font-bold animate-pulse">Carregando produtos...</p>
                </div>
             )}

             {!loading && produtos.length === 0 && (
                <div className="col-span-full text-center py-20 text-red-500">
                  Nenhum produto encontrado.
                </div>
             )}

             {produtos.map((produto) => {

                const produtoFormatado = {
                    id: produto.id,
                    name: produto.nome,          
                    description: produto.descricao, 
                    price: produto.preco,        
                    image_url: produto.imagem_url || '/imagens/04.png' 
                };

                return (

                    <ProductCard key={produto.id} produto={produtoFormatado} />
                );
             })}

          </div>
        </div>
      </section>


      <ContactSection />

    </main>
  );
}