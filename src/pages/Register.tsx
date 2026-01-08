import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      // Kayıt işleminden sonra Login'e veya Dashboard'a yönlendir
      navigate('/login');
    };
  
    return (
      <div className="min-h-screen flex bg-white">
        
        {/* SOL TARAF: Görsel (Mobilde Gizli) */}
        <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative justify-center items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-blue-900 opacity-90 z-10"></div>
          <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Team working" 
              className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 p-12 text-white max-w-lg">
              <h1 className="text-4xl font-bold mb-6">Finansal Özgürlüğe İlk Adım.</h1>
              <p className="text-lg text-blue-100">Smart Receipt Analyzer ailesine katılın, şirket harcamalarınızı %100 dijitalleştirin.</p>
          </div>
        </div>
  
        {/* SAĞ TARAF: Form */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-12 lg:w-1/2">
          <div className="w-full max-w-md space-y-8">
              <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-gray-900">Hesap Oluşturun</h2>
                  <p className="mt-2 text-sm text-gray-500">Ücretsiz deneme sürümü ile hemen başlayın.</p>
              </div>
  
              <form className="mt-8 space-y-5" onSubmit={handleRegister}>
                  <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Ad Soyad</label>
                      <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FaUser className="text-gray-400"/></div>
                          <input type="text" required className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Ahmet Yılmaz" />
                      </div>
                  </div>

                  <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">E-posta Adresi</label>
                      <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FaEnvelope className="text-gray-400"/></div>
                          <input type="email" required className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="ornek@sirket.com" />
                      </div>
                  </div>

                  <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Şifre</label>
                      <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FaLock className="text-gray-400"/></div>
                          <input type="password" required className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="••••••••" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">En az 8 karakter olmalıdır.</p>
                  </div>
  
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
                      Kayıt Ol
                  </button>
              </form>
  
              <p className="mt-4 text-center text-sm text-gray-600">
                  Zaten hesabınız var mı?{' '}
                  <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
                      Giriş Yap
                  </Link>
              </p>
          </div>
        </div>
      </div>
    );
};

export default Register;