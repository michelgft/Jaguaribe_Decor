'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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
    setErrorMsg('');
    
    const isEmailValid = emailRegex.test(email);
    if (!isEmailValid) {
      setErrorMsg('Por favor, insira um e-mail válido.');
      return;
    }
    
    setIsSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setErrorMsg('E-mail ou senha incorretos.');
      setIsSubmitting(false);
    } else {
      router.push('/perfil');
      router.refresh();
    }
  };

  const strengthInfo = getPasswordStrengthInfo();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-10">
          <Link href="/" className="inline-block text-4xl font-bold text-gray-900 tracking-tight mb-2 cursor-pointer hover:opacity-80 transition-opacity">
              Jaguaribe<span className="text-green-600">Decor</span>
          </Link>
          <p className="text-gray-500">Acesse sua conta para continuar</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {errorMsg && (
            <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg font-medium text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="seu@email.com"
                className={`w-full px-4 py-3 border ${
                  emailValid === null ? 'border-gray-200' : emailValid ? 'border-green-500' : 'border-red-500'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-gray-50 focus:bg-white`}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Sua senha"
                  className={`w-full px-4 py-3 border ${
                    passwordValid === null ? 'border-gray-200' : passwordValid ? 'border-green-500' : 'border-red-500'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-gray-50 focus:bg-white`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-green-600 text-sm font-medium"
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
              
              {password.length > 0 && (
                <div className="mt-3">
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div className={`${strengthInfo.color} h-full transition-all duration-500`} style={{ width: strengthInfo.width }}></div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-full shadow-lg transition-all flex justify-center items-center disabled:opacity-50"
            >
              {isSubmitting ? 'Acessando...' : 'Entrar'}
            </button>

            <div className="text-center pt-2">
              <p className="text-sm text-gray-500">
                Novo por aqui? 
                <Link href="/cadastro" className="font-bold text-green-600 hover:underline ml-1">Criar conta</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}