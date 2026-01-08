import { FaChartPie, FaWallet, FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Reports = () => {
  return (
    <div className="space-y-6">
       <h2 className="text-2xl font-bold text-gray-800">Finansal Raporlar</h2>

       {/* Üst Özet Kartları */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg">
                <p className="text-blue-100 text-sm mb-1">Toplam Harcama (Ocak)</p>
                <h3 className="text-3xl font-bold">₺24,500.00</h3>
                <div className="mt-4 flex items-center text-sm bg-blue-700/50 w-max px-2 py-1 rounded">
                    <FaArrowUp className="mr-1 text-red-300"/> 
                    <span>Geçen aya göre %12 artış</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm mb-1">Ortalama Günlük Harcama</p>
                <h3 className="text-2xl font-bold text-gray-800">₺816.00</h3>
                <div className="mt-4 flex items-center text-sm text-green-600">
                    <FaArrowDown className="mr-1"/> 
                    <span>Limitlerin altında</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
                 <div className="text-gray-500 text-sm mb-2">Kalan Bütçe</div>
                 <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-green-500 h-4 rounded-full" style={{ width: '24%' }}></div>
                 </div>
                 <div className="flex justify-between w-full mt-2 text-xs font-bold text-gray-600">
                    <span>Harcanan: ₺24.5k</span>
                    <span>Limit: ₺30k</span>
                 </div>
            </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Kategori Bazlı Harcama (CSS Bar Chart) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <FaChartPie className="text-blue-500"/> Kategori Dağılımı
                    </h3>
                </div>
                
                <div className="space-y-5">
                    {/* Item 1 */}
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-700">Elektronik & Ofis</span>
                            <span className="font-bold text-gray-900">₺12.999 (%55)</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full shadow-sm" style={{ width: '55%' }}></div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-700">Ulaşım & Yakıt</span>
                            <span className="font-bold text-gray-900">₺4.500 (%20)</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-yellow-500 h-2.5 rounded-full shadow-sm" style={{ width: '20%' }}></div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-700">Yemek & Gıda</span>
                            <span className="font-bold text-gray-900">₺3.250 (%15)</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full shadow-sm" style={{ width: '15%' }}></div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-700">Diğer</span>
                            <span className="font-bold text-gray-900">₺1.100 (%10)</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-gray-400 h-2.5 rounded-full shadow-sm" style={{ width: '10%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* En Çok Harcama Yapılan Yerler */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FaWallet className="text-purple-500"/> En Çok Harcama Yapılanlar
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-gray-600">V</div>
                            <div>
                                <p className="text-sm font-bold text-gray-800">Vatan Bilgisayar</p>
                                <p className="text-xs text-gray-500">2 İşlem</p>
                            </div>
                        </div>
                        <span className="font-bold text-gray-800">₺12.999</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-yellow-100 border border-yellow-200 flex items-center justify-center font-bold text-yellow-600">S</div>
                            <div>
                                <p className="text-sm font-bold text-gray-800">Shell Petrol</p>
                                <p className="text-xs text-gray-500">5 İşlem</p>
                            </div>
                        </div>
                        <span className="font-bold text-gray-800">₺4.000</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center font-bold text-green-600">S</div>
                            <div>
                                <p className="text-sm font-bold text-gray-800">Starbucks</p>
                                <p className="text-xs text-gray-500">12 İşlem</p>
                            </div>
                        </div>
                        <span className="font-bold text-gray-800">₺1.250</span>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};

export default Reports;