'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../lib/supabase'; // Importação do Supabase
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    // OWASP #1: Validação de Entrada (Senhas iguais)
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("As senhas não coincidem!");
      return;
    }

    // Validação de força mínima (Requisito de segurança básico)
    if (formData.password.length < 6) {
      setErrorMsg("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);

    // OWASP #3: Registro real no Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.name, // Salva o nome nos metadados do usuário
        }
      }
    });

    if (error) {
      // OWASP #7: Tratamento de erro seguro
      setErrorMsg(error.message === "User already registered" 
        ? "Este e-mail já está cadastrado." 
        : "Erro ao criar conta. Tente novamente.");
      setLoading(false);
    } else {
      setLoading(false);
      setShowSuccess(true);
      
      // Limpar formulário
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      
      // Redirecionamento após sucesso
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-4xl font-bold text-gray-900 tracking-tight mb-2 cursor-pointer hover:opacity-80 transition-opacity">
              Jaguaribe<span className="text-green-600">Decor</span>
          </Link>
          <p className="text-gray-500">Crie sua conta e transforme seu lar</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Alerta de Erro */}
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg font-medium text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: João da Silva"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-gray-50 focus:bg-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-gray-50 focus:bg-white"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">Senha</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-gray-50 focus:bg-white"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-1">Confirmar Senha</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repita a senha"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-gray-50 focus:bg-white ${
                  formData.confirmPassword && formData.password !== formData.confirmPassword 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-200'
                }`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-full shadow-lg transition-all flex justify-center items-center disabled:opacity-50"
            >
              {loading ? 'Criando conta...' : 'Cadastrar'}
            </button>

            <div className="text-center pt-2">
              <p className="text-sm text-gray-500">
                Já tem uma conta? 
                <Link href="/login" className="font-bold text-gray-900 hover:text-green-600 hover:underline ml-1">Fazer Login</Link>
              </p>
            </div>
          </form>
        </div>

        {showSuccess && (
          <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg animate-fadeIn text-center shadow-sm">
            <p className="text-green-800 font-bold">🎉 Conta criada com sucesso!</p>
            <p className="text-green-600 text-sm">Verifique seu e-mail para confirmar ou faça login.</p>
          </div>
        )}
      </div>
    </div>
  );
}