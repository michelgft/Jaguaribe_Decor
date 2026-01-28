'use client';

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"; 

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    async function buscarProdutos() {
      try {
        setLoading(true);
        // Busca todos os produtos no Supabase
        const { data, error } = await supabase.from('produtos').select('*');

        if (error) {
          console.error("Erro Supabase:", error);
        } else {
          console.log("Produtos encontrados:", data);
          setProdutos(data || []); // Garante que seja um array mesmo se vier vazio
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
      
      {/* 1. SEÇÃO HERO (Ajuste Lado a Lado) */}
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

      {/* 2. SEÇÃO SOBRE */}
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

      {/* 3. SEÇÃO PRODUTOS (Visual Corrigido & Debug) */}
{/* 3. SEÇÃO PRODUTOS (Visual Corrigido & Debug) */}
      <section id="produtos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-display mb-3">
              Coleção Exclusiva
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Peças selecionadas diretamente do nosso banco de dados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             
             {/* MENSAGEM DE CARREGAMENTO */}
             {loading && (
                <div className="col-span-full text-center py-20">
                  <p className="text-green-600 text-xl font-bold animate-pulse">Carregando produtos do banco...</p>
                </div>
             )}

             {/* MENSAGEM SE NÃO TIVER PRODUTOS (CORRIGIDO: 'produtos' sem 'c') */}
             {!loading && produtos.length === 0 && (
                <div className="col-span-full text-center py-20 text-red-500">
                  Nenhum produto encontrado. Verifique se a tabela 'produtos' no Supabase tem dados.
                </div>
             )}

             {/* LISTA DE PRODUTOS */}
             {produtos.map((produto) => (
                <div key={produto.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col">
                  
                  {/* IMAGEM */}
                  <div className="h-64 w-full relative bg-gray-100 overflow-hidden">
                    <img 
                      src={produto.imagem_url || '/imagens/04.png'} 
                      alt={produto.nome}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded text-gray-700 uppercase tracking-wide">
                      {produto.categoria || 'Geral'}
                    </span>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                        {produto.nome}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2 h-10">
                        {produto.descricao}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                      <span className="text-xl font-bold text-green-700">
                        R$ {produto.preco ? Number(produto.preco).toFixed(2).replace('.', ',') : '0,00'}
                      </span>
                      
                      <button className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>
             ))}
          </div>
        </div>
      </section>
      {/* 4. SEÇÃO CONTATO */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 font-display mb-12">
            Contato
          </h2>
          <div className="text-gray-600">
            <p>contato@jaguaribedecor.com</p>
            <p>(81) 99999-9999</p>
          </div>
        </div>
      </section>

    </main>
  );
}