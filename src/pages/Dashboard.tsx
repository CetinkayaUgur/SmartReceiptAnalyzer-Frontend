import { FaArrowUp, FaCheck, FaClock, FaCloudUploadAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Genel Bakış</h2>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
            <div>
                <p className="text-sm text-gray-500 mb-1">Bu Ayki Gider</p>
                <h3 className="text-2xl font-bold text-gray-800">₺24,500.00</h3>
            </div>
            <div className="p-3 bg-red-50 text-red-600 rounded-lg"><FaArrowUp /></div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
            <div>
                <p className="text-sm text-gray-500 mb-1">İşlenen Fatura</p>
                <h3 className="text-2xl font-bold text-gray-800">142</h3>
            </div>
            <div className="p-3 bg-green-50 text-green-600 rounded-lg"><FaCheck /></div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
            <div>
                <p className="text-sm text-gray-500 mb-1">Bekleyen İşlem</p>
                <h3 className="text-2xl font-bold text-gray-800">3</h3>
            </div>
            <div className="p-3 bg-orange-50 text-orange-600 rounded-lg"><FaClock /></div>
        </div>
      </div>

      {/* Alt Bölüm */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Hızlı Fatura Yükle</h3>
                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-center p-6 hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all group">
                    <FaCloudUploadAlt className="text-5xl text-gray-300 group-hover:text-blue-500 mb-4 transition-colors" />
                    <p className="text-gray-600 font-medium group-hover:text-blue-600">Dosyayı buraya sürükleyin</p>
                </div>
            </div>
        </div>

        <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">Son Yüklenenler</h3>
                    <button className="text-sm text-blue-600 hover:underline">Tümünü Gör</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                            <tr>
                                <th className="px-6 py-3">Firma</th>
                                <th className="px-6 py-3">Tarih</th>
                                <th className="px-6 py-3">Tutar</th>
                                <th className="px-6 py-3">Durum</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">Migros A.Ş.</td>
                                <td className="px-6 py-4">08.01.2026</td>
                                <td className="px-6 py-4 font-bold">₺1,250.90</td>
                                <td className="px-6 py-4 text-green-600 font-medium">Tamamlandı</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">Shell</td>
                                <td className="px-6 py-4">07.01.2026</td>
                                <td className="px-6 py-4 font-bold">₺2,400.00</td>
                                <td className="px-6 py-4 text-green-600 font-medium">Tamamlandı</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;