'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Função genérica para atualizar os campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação simples de senhas iguais
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    setLoading(true);

    // Simulação de cadastro
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      
      // Limpar formulário
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      
      // Redirecionamento simulado
      setTimeout(() => {
        alert("Conta criada! Redirecionando para o login...");
        // router.push('/login');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* LOGO */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-4xl font-bold text-gray-900 tracking-tight font-display mb-2 cursor-pointer hover:opacity-80 transition-opacity">
              Jaguaribe<span className="text-green-600">Decor</span>
          </Link>
          <p className="text-gray-500">Crie sua conta e transforme seu lar</p>
        </div>

        {/* Card de Cadastro */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Campo Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: João da Silva"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                required
              />
            </div>

            {/* Campo E-mail */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                required
              />
            </div>

            {/* Campo Senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Crie uma senha forte"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                required
              />
            </div>

            {/* Confirmar Senha */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-1">
                Confirmar Senha
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repita a senha"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white ${
                  formData.confirmPassword && formData.password !== formData.confirmPassword 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-200'
                }`}
                required
              />
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">As senhas não coincidem.</p>
              )}
            </div>

            {/* Checkbox Termos */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 cursor-pointer select-none">
                Li e concordo com os <a href="#" className="text-green-600 font-bold hover:underline">Termos de Uso</a> e <a href="#" className="text-green-600 font-bold hover:underline">Política de Privacidade</a>.
              </label>
            </div>

            {/* Botão Cadastrar */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-full shadow-lg shadow-green-200 hover:transform hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                  Criando conta...
                </>
              ) : (
                'Cadastrar'
              )}
            </button>

            <div className="text-center pt-2">
              <p className="text-sm text-gray-500">
                Já tem uma conta? 
                <Link href="/login" className="font-bold text-gray-900 hover:text-green-600 hover:underline ml-1">
                  Fazer Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Mensagem de sucesso */}
        {showSuccess && (
          <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg animate-fadeIn text-center shadow-sm">
            <p className="text-green-800 font-bold">🎉 Conta criada com sucesso!</p>
            <p className="text-green-600 text-sm">Bem-vindo(a) à Jaguaribe Decor.</p>
          </div>
        )}

        <div className="mt-8 text-center text-xs text-gray-400">
          <p>&copy; 2024 Jaguaribe Decor. Todos os direitos reservados.</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}