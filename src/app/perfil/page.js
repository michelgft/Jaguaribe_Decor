'use client';

import { useAuth } from '../../context/AuthContext';
import ProtectedRoute from '../../components/ProtectedRoute';
import Link from 'next/link';

export default function PerfilPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            
            <div className="bg-green-600 p-8 text-white">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold border-2 border-white/30">
                  {user?.user_metadata?.full_name?.charAt(0) || 'U'}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{user?.user_metadata?.full_name}</h1>
                  <p className="opacity-80">{user?.email}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Informações da Conta</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-xs text-gray-500 uppercase font-bold">Status da Sessão</span>
                  <p className="text-green-600 font-medium">Autenticado via JWT</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-xs text-gray-500 uppercase font-bold">ID de Segurança</span>
                  <p className="text-gray-900 font-mono text-xs truncate">{user?.id}</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row gap-4">
                <Link href="/" className="flex-1 bg-gray-900 text-white text-center font-bold py-3 rounded-xl hover:bg-gray-800 transition-all">
                  Voltar para a Loja
                </Link>
                <button 
                  onClick={logout}
                  className="flex-1 border-2 border-red-500 text-red-500 font-bold py-3 rounded-xl hover:bg-red-50 transition-all"
                >
                  Encerrar Sessão
                </button>
              </div>
            </div>

          </div>
          
          <p className="mt-6 text-center text-gray-400 text-sm italic">
            Esta página é protegida por políticas de Row Level Security (RLS). 
            Somente você pode visualizar estas informações.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
}