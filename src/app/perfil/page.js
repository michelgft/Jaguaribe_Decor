'use client';
import { useAuth } from '../../context/AuthContext';
import ProtectedRoute from '../../components/ProtectedRoute';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
export default function PerfilPage() {
const { user, logout } = useAuth();
const [orders, setOrders] = useState([]);
const [loadingOrders, setLoadingOrders] = useState(true);
useEffect(() => {
async function fetchOrders() {
if (!user) return;
try {
const { data, error } = await supabase
.from('orders')
.select('*')
.order('created_at', { ascending: false });
if (error) throw error;
setOrders(data || []);
} catch (err) {
console.error(err.message);
} finally {
setLoadingOrders(false);
}
}
fetchOrders();
}, [user]);
return (
<ProtectedRoute>
<div className="min-h-screen bg-[#f8f9fa] py-12 text-[#2d3436]">
<div className="max-w-3xl mx-auto px-4">
<div className="bg-white rounded-[2rem] shadow-xl shadow-green-900/5 border border-gray-100 overflow-hidden">
<div className="bg-[#1a3c34] p-10 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
<div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
<div className="w-24 h-24 bg-[#e9ecef] text-[#1a3c34] rounded-2xl flex items-center justify-center text-4xl font-black shadow-inner">
{user?.user_metadata?.full_name?.charAt(0) || 'U'}
</div>
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
<span className="bg-amber-400 text-[#1a3c34] text-[10px] px-2 py-0.5 rounded-full font-black uppercase">
Membro Jaguaribe
</span>
</div>
<h1 className="text-3xl font-bold tracking-tight">
Olá, {user?.user_metadata?.full_name?.split(' ')[0] || 'Cliente'}!
</h1>
<p className="opacity-70 text-sm font-light italic">Bem-vindo ao seu espaço de decoração</p>
</div>
</div>
</div>
<div className="p-8 md:p-12">
<div className="mb-10">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-bold text-[#1a3c34]">Meus Pedidos Recentes</h2>
<span className="text-xs text-gray-400 font-medium">{orders.length} pedidos</span>
</div>
{loadingOrders ? (
<div className="animate-pulse flex space-y-4 flex-col">
<div className="h-16 bg-gray-50 rounded-2xl w-full"></div>
<div className="h-16 bg-gray-50 rounded-2xl w-full"></div>
</div>
) : orders.length > 0 ? (
<div className="grid gap-4">
{orders.map((pedido) => (
<div key={pedido.id} className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all">
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">ID {pedido.id.slice(0, 8)}</span>
<span className="font-bold text-gray-700">Realizado em {new Date(pedido.created_at).toLocaleDateString('pt-BR')}</span>
</div>
<div className="text-right">
<p className="text-lg font-black text-[#1a3c34]">R$ {pedido.total_price?.toFixed(2)}</p>
<span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md uppercase">
{pedido.status}
</span>
</div>
</div>
))}
</div>
) : (
<div className="text-center py-10 border-2 border-dashed border-gray-100 rounded-2xl">
<p className="text-gray-400 text-sm">Nenhum pedido realizado ainda.</p>
</div>
)}
</div>
<div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 mb-10">
<h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Segurança da Conta</h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-gray-200 pb-2">
<span className="text-xs text-gray-500">E-mail</span>
<span className="text-xs font-bold text-gray-800">{user?.email}</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Token de Segurança</span>
<span className="text-[10px] font-mono text-gray-400">{user?.id}</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<Link href="/" className="bg-[#1a3c34] text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 hover:bg-[#142e28] transition-all active:scale-95">
Ir para a Loja
</Link>
<button
onClick={logout}
className="border-2 border-red-50 text-red-400 font-bold py-4 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all"
>
Sair da Conta
</button>
</div>
</div>
</div>
<div className="mt-8 flex flex-col items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-800 rounded-full animate-pulse"></div>
<p className="text-center text-[9px] text-gray-400 max-w-sm leading-relaxed uppercase tracking-[0.15em]">
Acesso restrito via Row Level Security (RLS) e Token JWT.
</p>
</div>
</div>
</div>
</ProtectedRoute>
);
}