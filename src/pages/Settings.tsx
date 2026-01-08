import { FaUser, FaLock, FaBell, FaSave } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
        <h2 className="text-2xl font-bold text-gray-800">Hesap Ayarları</h2>

        {/* Profil Kartı */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <FaUser className="text-blue-600"/>
                <h3 className="font-bold text-gray-700">Profil Bilgileri</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                    <input type="text" defaultValue="Ahmet Yılmaz" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                    <input type="email" defaultValue="ahmet@sirket.com" disabled className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 text-gray-500 cursor-not-allowed" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input type="text" defaultValue="+90 555 123 45 67" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Şirket Adı</label>
                    <input type="text" defaultValue="Yılmaz Teknoloji A.Ş." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
                </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-right">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 ml-auto">
                    <FaSave /> Değişiklikleri Kaydet
                </button>
            </div>
        </div>

        {/* Şifre Değiştirme */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <FaLock className="text-orange-500"/>
                <h3 className="font-bold text-gray-700">Güvenlik</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mevcut Şifre</label>
                    <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Yeni Şifre</label>
                    <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="col-span-1">
                    <button className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">
                        Şifreyi Güncelle
                    </button>
                </div>
            </div>
        </div>

        {/* Bildirim Ayarları */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <FaBell className="text-purple-500"/>
                <h3 className="font-bold text-gray-700">Bildirim Tercihleri</h3>
            </div>
            <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm font-medium">Fatura analizi tamamlandığında e-posta gönder</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm font-medium">Haftalık harcama raporu özeti al</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Settings;