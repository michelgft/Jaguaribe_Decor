'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import { supabase } from '../../../lib/supabase'; 
import { useCart } from '../../../context/CartContext'; 
import Link from 'next/link';

export default function ProdutoDetalhes() {
  const params = useParams(); 
  const { id } = params;
  const { addToCart } = useCart();
  
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDetalhes() {
      // REQUISITO OWASP #1: Validação de Entrada
      // Evita processar IDs maliciosos, vazios ou excessivamente longos
      if (!id || typeof id !== 'string' || id.length > 50) {
        setLoading(false);
        return;
      }

      setLoading(true);
      
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single(); 

        // REQUISITO OWASP #7: Tratamento de Erro Seguro
        // Não expomos o erro técnico do banco (SQL/Colunas) para o cliente
        if (error) {
          console.error("Log de segurança: Falha na requisição de produto."); 
          setProduto(null);
        } else {
          setProduto(data);
        }
      } catch (err) {
        // Captura falhas inesperadas de rede
        setProduto(null);
      } finally {
        setLoading(false);
      }
    }

    carregarDetalhes();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-green-600 text-xl font-bold animate-pulse">Carregando...</div>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Produto não encontrado</h2>
        <Link href="/" className="text-green-600 hover:underline">Voltar para a loja</Link>
      </div>
    );
  }

  const produtoParaCarrinho = {
    id: produto.id,
    name: produto.name,
    price: produto.price,
    image_url: produto.image_url,
    description: produto.description
  };

  return (
    <div className="bg-white min-h-screen pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-green-600 transition-colors font-medium">
          &larr; Voltar para a coleção
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 border border-gray-100 h-[400px] md:h-[600px]">
          <img
            src={produto.image_url}
            alt={produto.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col h-full justify-center py-4">
          <span className="text-sm font-bold text-green-600 tracking-wider uppercase mb-2">
            {produto.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-6 leading-tight">
            {produto.name}
          </h1>

          <div className="flex items-end gap-4 mb-8 border-b border-gray-100 pb-8">
            <span className="text-4xl font-bold text-gray-900">
              R$ {Number(produto.price).toFixed(2).replace('.', ',')}
            </span>
            <span className="text-sm text-gray-500 mb-2">em até 12x sem juros</span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {produto.description}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(produtoParaCarrinho)}
              className="flex-1 bg-gray-900 hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-green-200 active:scale-95 flex items-center justify-center gap-3"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}