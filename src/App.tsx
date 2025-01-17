import React, { useState } from 'react';
import { Scale, Lock, Mail, UserPlus, KeyRound, Building2 } from 'lucide-react';

function App() {
  const [activeView, setActiveView] = useState<'login' | 'register' | 'forgot'>('login');

  const LoginForm = () => (
    <div className="space-y-4 w-full">
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="email"
          placeholder="Email"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="password"
          placeholder="Senha"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Entrar
      </button>
    </div>
  );

  const RegisterForm = () => (
    <div className="space-y-4 w-full">
      <div className="relative">
        <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Nome completo"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="email"
          placeholder="Email"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="password"
          placeholder="Senha"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="password"
          placeholder="Confirmar senha"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Criar conta
      </button>
    </div>
  );

  const ForgotPasswordForm = () => (
    <div className="space-y-4 w-full">
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="email"
          placeholder="Email"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Recuperar senha
      </button>
    </div>
  );

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="bg-blue-600 p-3 rounded-full">
            <Scale className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          {activeView === 'login' && 'Acesso ao Sistema'}
          {activeView === 'register' && 'Criar Nova Conta'}
          {activeView === 'forgot' && 'Recuperar Senha'}
        </h2>

        {activeView === 'login' && <LoginForm />}
        {activeView === 'register' && <RegisterForm />}
        {activeView === 'forgot' && <ForgotPasswordForm />}

        <div className="mt-6 text-center space-y-2">
          {activeView === 'login' && (
            <>
              <button
                onClick={() => setActiveView('forgot')}
                className="text-sm text-blue-600 hover:text-blue-700 block w-full"
              >
                Esqueceu sua senha?
              </button>
              <button
                onClick={() => setActiveView('register')}
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center justify-center w-full gap-1"
              >
                <UserPlus className="h-4 w-4" />
                Criar nova conta
              </button>
            </>
          )}
          {(activeView === 'register' || activeView === 'forgot') && (
            <button
              onClick={() => setActiveView('login')}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center justify-center w-full gap-1"
            >
              <KeyRound className="h-4 w-4" />
              Voltar para o login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;