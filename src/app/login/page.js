'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  // --- LÓGICA MANTIDA DO SEU COLEGA (ESTÁ ÓTIMA) ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === '') { setEmailValid(null); return; }
    setEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value === '') { setPasswordValid(null); setPasswordStrength(0); return; }
    const strength = checkPasswordStrength(value);
    setPasswordStrength(strength);
    setPasswordValid(passwordRegex.test(value));
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength += 1;
    return strength;
  };

  const getPasswordStrengthInfo = () => {
    switch(passwordStrength) {
      case 0: case 1: return { text: 'Muito fraca', color: 'bg-red-500', width: '25%' };
      case 2: return { text: 'Fraca', color: 'bg-orange-500', width: '35%' };
      case 3: return { text: 'Média', color: 'bg-yellow-500', width: '50%' };
      case 4: return { text: 'Forte', color: 'bg-green-400', width: '75%' };
      case 5: return { text: 'Muito forte', color: 'bg-green-600', width: '100%' };
      default: return { text: 'Baixa', color: 'bg-red-500', width: '25%' };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    
    if (!isEmailValid || !isPasswordValid) {
      setEmailValid(isEmailValid);
      setPasswordValid(isPasswordValid);
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        alert('Redirecionando para o painel da Jaguaribe Decor...');
        setEmail(''); setPassword(''); setRememberMe(false);
        setEmailValid(null); setPasswordValid(null); setPasswordStrength(0);
        setShowSuccess(false);
      }, 1500);
    }, 1500);
  };

  const getEmailIcon = () => {
    if (emailValid === null) return 'text-gray-400';
    return emailValid ? 'text-green-500' : 'text-red-500';
  };

  const getPasswordIcon = () => {
    if (passwordValid === null) return 'text-gray-400';
    return passwordValid ? 'text-green-500' : 'text-red-500';
  };

  const strengthInfo = getPasswordStrengthInfo();

  // --- ALTERAÇÕES VISUAIS COMEÇAM AQUI ---
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* LOGO: Agora usa o estilo tipográfico do site, sem o ícone JD */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block text-4xl font-bold text-gray-900 tracking-tight font-display mb-2 cursor-pointer hover:opacity-80 transition-opacity">
              Jaguaribe<span className="text-green-600">Decor</span>
          </Link>
          <p className="text-gray-500">Acesse sua conta para continuar</p>
        </div>

        {/* Card de login */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Campo de e-mail */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                E-mail
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="seu@email.com"
                  className={`w-full px-4 py-3 border ${
                    emailValid === null ? 'border-gray-200' : emailValid ? 'border-green-500' : 'border-red-500'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white`}
                  required
                />
                <div className="absolute right-3 top-3">
                  <div className={`w-3 h-3 rounded-full mt-1 ${getEmailIcon()}`}></div>
                </div>
              </div>
              {emailValid === false && email.length > 3 && (
                <p className="text-red-500 text-xs mt-1">E-mail inválido.</p>
              )}
            </div>

            {/* Campo de senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Sua senha secreta"
                  className={`w-full px-4 py-3 border ${
                    passwordValid === null ? 'border-gray-200' : passwordValid ? 'border-green-500' : 'border-red-500'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50 focus:bg-white`}
                  required
                />
                <div className="absolute right-3 top-3 flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-green-600 text-sm font-medium transition-colors"
                  >
                    {showPassword ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
              </div>
              
              {/* Barra de Força (Visual mais limpo) */}
              {password.length > 0 && (
                <div className="mt-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-400">Segurança:</span>
                    <span className={`text-xs font-bold ${strengthInfo.color.replace('bg-', 'text-')}`}>
                      {strengthInfo.text}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`${strengthInfo.color} h-full transition-all duration-500 ease-out`}
                      style={{ width: strengthInfo.width }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Lembrar de mim */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-600 cursor-pointer select-none">
                  Lembrar de mim
                </label>
              </div>
              <Link href="#" className="text-sm font-bold text-green-600 hover:text-green-700 hover:underline">
                Esqueceu?
              </Link>
            </div>

            {/* Botão de login (Padrão Preto -> Verde) */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-full shadow-lg hover:shadow-green-200 hover:transform hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                  Acessando...
                </>
              ) : (
                'Entrar'
              )}
            </button>

            <div className="text-center pt-2">
              <p className="text-sm text-gray-500">
                Novo por aqui? 
                <Link href="/cadastro" className="font-bold text-green-600 hover:underline ml-1">
                  Criar conta
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Mensagem de sucesso */}
        {showSuccess && (
          <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg animate-fadeIn text-center shadow-sm">
            <p className="text-green-800 font-bold">🎉 Login realizado com sucesso!</p>
            <p className="text-green-600 text-sm">Aguarde o redirecionamento...</p>
          </div>
        )}

        <div className="mt-8 text-center text-xs text-gray-400">
          <p>&copy; 2024 Jaguaribe Decor. Todos os direitos reservados.</p>
        </div>
      </div>
      
      {/* Estilos CSS (Animation) */}
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