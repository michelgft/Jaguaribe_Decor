'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import { supabase } from '../../../lib/supabase'; 
import { useCart } from '../../../context/CartContext'; 
import Link from 'next/link';

export default function ProdutoDetalhes() {
  const { id } = useParams(); 
  const { addToCart } = useCart();
  
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDetalhes() {
      if (!id) return;

      setLoading(true);
      
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .eq('id', id)
        .single(); 

      if (error) {
        console.error("Erro ao buscar produto:", error);
      } else {
        setProduto(data);
      }
      setLoading(false);
    }

    carregarDetalhes();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-green-600 text-xl font-bold animate-pulse">
          Carregando detalhes...
        </div>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Produto não encontrado 😕</h2>
        <Link href="/" className="text-green-600 hover:underline">Voltar para a loja</Link>
      </div>
    );
  }

  // lembrem: Padronizar os dados para o Carrinho (igual fizemos na Home)
  // pq o Supabase entrega em Português, mas nosso carrinho espera Inglês (name, price) e tal
  const produtoParaCarrinho = {
    id: produto.id,
    name: produto.nome,
    price: produto.preco,
    image_url: produto.imagem_url || '/imagens/04.png',
    description: produto.descricao
  };

  //TELA DO PRODUTO (Conteúdo)
  return (
    <div className="bg-white min-h-screen pb-20 pt-10">
      
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-green-600 transition-colors font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Voltar para a coleção
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 border border-gray-100 h-[400px] md:h-[600px]">
          <img
            src={produto.imagem_url || '/imagens/04.png'}
            alt={produto.nome}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col h-full justify-center py-4">
          <span className="text-sm font-bold text-green-600 tracking-wider uppercase mb-2">
            {produto.categoria || 'Exclusivo'}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-6 leading-tight">
            {produto.nome}
          </h1>

          <div className="flex items-end gap-4 mb-8 border-b border-gray-100 pb-8">
            <span className="text-4xl font-bold text-gray-900">
              R$ {Number(produto.preco).toFixed(2).replace('.', ',')}
            </span>
            <span className="text-sm text-gray-500 mb-2">
               em até 12x sem juros
            </span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {produto.descricao}
            <br /><br />
            Peça de design assinada, produzida com materiais selecionados para garantir durabilidade, conforto e sofisticação ao seu ambiente.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(produtoParaCarrinho)}
              className="flex-1 bg-gray-900 hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-green-200 active:scale-95 flex items-center justify-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Adicionar ao Carrinho
            </button>
          </div>
          
          <div className="mt-8 p-4 bg-green-50 rounded-lg flex items-start gap-3">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700 mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            <div>
                <p className="font-bold text-green-800 text-sm">Entrega Garantida</p>
                <p className="text-sm text-green-700">Enviamos para todo o Brasil com código de rastreio.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}