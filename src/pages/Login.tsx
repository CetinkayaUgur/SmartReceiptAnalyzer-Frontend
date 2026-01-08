import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Normalde burada Backend'e istek atılır.
    // Şimdilik direkt Dashboard'a yönlendiriyoruz.
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* SOL TARAF: Görsel ve Branding (Mobilde Gizli) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative justify-center items-center overflow-hidden">
        {/* Arkaplan Deseni */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-90 z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Yazı Alanı */}
        <div className="relative z-20 p-12 text-white max-w-lg">
            <h1 className="text-5xl font-bold mb-6">Harcamalarınız Kontrol Altında.</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
                Smart Receipt Analyzer ile fişlerinizi saniyeler içinde dijitalleştirin, yapay zeka ile analiz edin ve bütçenizi yönetin.
            </p>
        </div>
      </div>

      {/* SAĞ TARAF: Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Tekrar Hoş Geldiniz</h2>
                <p className="mt-2 text-sm text-gray-500">Hesabınıza giriş yaparak devam edin.</p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">E-posta Adresi</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaEnvelope className="text-gray-400"/>
                            </div>
                            <input type="email" required className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none" placeholder="ornek@sirket.com" />
                        </div>
                    </div>
                    <div>
                         <div className="flex items-center justify-between mb-1">
                            <label className="text-sm font-medium text-gray-700">Şifre</label>
                            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">Şifremi Unuttum?</a>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="text-gray-400"/>
                            </div>
                            <input type="password" required className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none" placeholder="••••••••" />
                        </div>
                    </div>
                </div>

                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.01]">
                    Giriş Yap
                </button>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">veya</span></div>
                </div>

                <button type="button" className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <FaGoogle className="text-red-500"/> Google ile devam et
                </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
                Hesabınız yok mu?{' '}
                <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
                    Hemen Kayıt Olun
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;