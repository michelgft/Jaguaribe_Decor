'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Expressões regulares para validação
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

  // Validar email em tempo real
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value === '') {
      setEmailValid(null);
      return;
    }
    
    setEmailValid(emailRegex.test(value));
  };

  // Validar senha em tempo real
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    
    if (value === '') {
      setPasswordValid(null);
      setPasswordStrength(0);
      return;
    }
    
    // Verificar força da senha
    const strength = checkPasswordStrength(value);
    setPasswordStrength(strength);
    
    // Verificar formato válido
    setPasswordValid(passwordRegex.test(value));
  };

  // Verificar força da senha
  const checkPasswordStrength = (password) => {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength += 1;
    
    return strength;
  };

  // Obter texto e cor da força da senha
  const getPasswordStrengthInfo = () => {
    switch(passwordStrength) {
      case 0:
      case 1:
        return { text: 'Muito fraca', color: 'bg-red-500', width: '25%' };
      case 2:
        return { text: 'Fraca', color: 'bg-orange-500', width: '35%' };
      case 3:
        return { text: 'Média', color: 'bg-yellow-500', width: '50%' };
      case 4:
        return { text: 'Forte', color: 'bg-green-400', width: '75%' };
      case 5:
        return { text: 'Muito forte', color: 'bg-green-600', width: '100%' };
      default:
        return { text: 'Baixa', color: 'bg-red-500', width: '25%' };
    }
  };

  // Lidar com envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação final
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    
    if (!isEmailValid || !isPasswordValid) {
      setEmailValid(isEmailValid);
      setPasswordValid(isPasswordValid);
      return;
    }
    
    // Simular envio
    setIsSubmitting(true);
    
    // Simular chamada de API
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset após alguns segundos
      setTimeout(() => {
        alert('Redirecionando para o painel da Jaguaribe Decor...');
        // Aqui você poderia redirecionar: router.push('/dashboard')
        
        // Reset do formulário
        setEmail('');
        setPassword('');
        setRememberMe(false);
        setEmailValid(null);
        setPasswordValid(null);
        setPasswordStrength(0);
        setShowSuccess(false);
      }, 1500);
    }, 1500);
  };

  // Estilo para ícones de validação
  const getEmailIcon = () => {
    if (emailValid === null) return 'text-gray-400';
    return emailValid ? 'text-green-500' : 'text-red-500';
  };

  const getPasswordIcon = () => {
    if (passwordValid === null) return 'text-gray-400';
    return passwordValid ? 'text-green-500' : 'text-red-500';
  };

  const strengthInfo = getPasswordStrengthInfo();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e título */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-[#132f28] p-3 rounded-full">
              <div className="text-white text-2xl font-bold">JD</div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#132f28]">Jaguaribe Decor</h1>
          <p className="text-gray-600 mt-2">Faça login para acessar sua conta</p>
        </div>

        {/* Card de login */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo de e-mail */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                    emailValid === null 
                      ? 'border-gray-300' 
                      : emailValid 
                        ? 'border-green-500' 
                        : 'border-red-500'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#132f28] focus:border-transparent transition`}
                  required
                />
                <div className="absolute right-3 top-3">
                  <div className={`w-3 h-3 rounded-full ${getEmailIcon()}`}></div>
                </div>
              </div>
              {emailValid === false && email.length > 3 && (
                <p className="text-red-600 text-xs mt-1">
                  Use um e-mail válido (exemplo: nome@provedor.com)
                </p>
              )}
              <p className="text-gray-500 text-xs mt-2">
                Caracteres permitidos: letras, números, @, ., -, _
              </p>
            </div>

            {/* Campo de senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Digite sua senha"
                  className={`w-full px-4 py-3 border ${
                    passwordValid === null 
                      ? 'border-gray-300' 
                      : passwordValid 
                        ? 'border-green-500' 
                        : 'border-red-500'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#132f28] focus:border-transparent transition`}
                  required
                />
                <div className="absolute right-3 top-3 flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getPasswordIcon()}`}></div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 text-sm"
                  >
                    {showPassword ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
              </div>
              {passwordValid === false && password.length > 5 && (
                <p className="text-red-600 text-xs mt-1">
                  A senha deve ter 8+ caracteres com letras, números e símbolos
                </p>
              )}
              <p className="text-gray-500 text-xs mt-2">
                Caracteres permitidos: letras, números, !@#$%^&*()_+-=
              </p>
              
              {/* Indicador de força da senha */}
              {password.length > 0 && (
                <div className="mt-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-600">Força da senha:</span>
                    <span className="text-xs font-medium">{strengthInfo.text}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${strengthInfo.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: strengthInfo.width }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Lembrar de mim e esqueci a senha */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-[#132f28] focus:ring-[#132f28] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Lembrar de mim
                </label>
              </div>
              <Link href="#" className="text-sm font-medium text-[#132f28] hover:underline">
                Esqueceu a senha?
              </Link>
            </div>

            {/* Botão de login */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#132f28] text-white font-medium py-3 px-4 rounded-lg hover:bg-[#0f251f] hover:transform hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                  Processando...
                </>
              ) : (
                'Entrar'
              )}
            </button>

            {/* Link para cadastro */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Não tem uma conta? 
                <Link href="#" className="font-medium text-[#132f28] hover:underline ml-1">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Mensagem de sucesso */}
        {showSuccess && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
              <p className="text-green-800 font-medium">Login realizado com sucesso! Redirecionando...</p>
            </div>
          </div>
        )}

        {/* Informações de segurança */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Este site é protegido por criptografia e políticas de segurança de dados.</p>
          <p className="mt-1">Projeto de Segurança de Dados - Jaguaribe Decor</p>
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
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}