import { useState } from 'react';
import { FaPlus, FaSearch, FaFileExport, FaEye, FaRobot, FaTimes, FaCheck, FaTrash } from 'react-icons/fa';

// Fatura Veri Tipi
interface Receipt {
  id: string;
  merchant: string;
  date: string;
  amount: number | null;
  category: string;
  status: 'processing' | 'pending' | 'completed';
  imageUrl?: string; // İleride gerçek resim URL'i gelecek
}

// Örnek Veriler
const MOCK_DATA: Receipt[] = [
  { id: '#TR-2938', merchant: 'Bilinmiyor', date: '--.--.----', amount: null, category: 'Analiz Ediliyor...', status: 'processing' },
  { id: '#TR-2937', merchant: 'Starbucks', date: '2026-01-09', amount: 145.50, category: 'Yemek & İçecek', status: 'pending' },
  { id: '#TR-2936', merchant: 'Amazon TR', date: '2026-01-05', amount: 3400.00, category: 'Ofis Malzemesi', status: 'completed' },
];

const Receipts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState<Receipt | null>(null);

  // Modalı Açma Fonksiyonu
  const openModal = (receipt: Receipt) => {
    // Sadece OCR işlemi bitmişse aç
    if (receipt.status === 'processing') return; 
    setSelectedReceipt(receipt);
    setIsModalOpen(true);
  };

  return (
    <div className="h-full flex flex-col relative">
      {/* Üst Başlık ve Buton */}
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-800">Fatura Arşivi</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center gap-2 shadow-sm transition-all">
              <FaPlus /> Yeni Fatura Yükle
          </button>
      </div>

      {/* Filtreler */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-wrap gap-4 items-center justify-between flex-shrink-0">
        <div className="flex gap-4 items-center w-full md:w-auto">
            <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input type="text" placeholder="Firma veya Kategori Ara..." className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 w-64 text-sm" />
            </div>
            <select className="border rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none bg-white">
                <option>Tüm Kategoriler</option>
                <option>Gıda</option>
                <option>Ulaşım</option>
            </select>
        </div>
        <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center gap-2 font-medium">
            <FaFileExport /> Excel'e Aktar
        </button>
      </div>

      {/* Tablo Alanı */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-1 overflow-y-auto">
          <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b sticky top-0">
                  <tr>
                      <th className="px-6 py-4 font-semibold">Fatura ID</th>
                      <th className="px-6 py-4 font-semibold">Firma</th>
                      <th className="px-6 py-4 font-semibold">Tarih</th>
                      <th className="px-6 py-4 font-semibold">Tutar</th>
                      <th className="px-6 py-4 font-semibold">Kategori (AI)</th>
                      <th className="px-6 py-4 font-semibold">Durum</th>
                      <th className="px-6 py-4 text-right font-semibold">İşlem</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                  {MOCK_DATA.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs">{item.id}</td>
                        <td className="px-6 py-4 font-medium text-gray-800">{item.merchant}</td>
                        <td className="px-6 py-4">{item.date}</td>
                        <td className="px-6 py-4 font-bold text-gray-800">{item.amount ? `₺${item.amount.toFixed(2)}` : '--'}</td>
                        <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium 
                                ${item.category === 'Analiz Ediliyor...' ? 'text-gray-400 italic' : 'bg-blue-50 text-blue-700'}`}>
                                {item.category}
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            {item.status === 'processing' && <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold animate-pulse">OCR İşleniyor</span>}
                            {item.status === 'pending' && <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-semibold">Onay Bekliyor</span>}
                            {item.status === 'completed' && <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">Doğrulandı</span>}
                        </td>
                        <td className="px-6 py-4 text-right">
                            {item.status === 'pending' ? (
                                <button onClick={() => openModal(item)} className="text-blue-600 hover:text-blue-800 font-medium text-xs border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition-colors">
                                    İncele
                                </button>
                            ) : (
                                <button className="text-gray-400 hover:text-gray-600 p-1" disabled={item.status === 'processing'}>
                                    <FaEye />
                                </button>
                            )}
                        </td>
                    </tr>
                  ))}
              </tbody>
          </table>
      </div>

      {/* --- OCR MODAL --- */}
      {isModalOpen && selectedReceipt && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            
            {/* Modal Content */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] flex overflow-hidden relative z-10 animate-[fadeIn_0.2s_ease-out]">
                
                {/* SOL: Fatura Görseli (Mock) */}
                <div className="w-1/2 bg-slate-100 flex items-center justify-center p-6 relative border-r border-gray-200">
                    <div className="absolute top-4 left-4 bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">Orijinal Belge</div>
                    {/* Fatura Görseli Simülasyonu */}
                    <div className="bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform -rotate-1 border border-gray-200 h-4/5 w-3/4 flex flex-col text-xs text-gray-500 font-mono">
                        <div className="text-center text-xl font-bold text-black mb-6 border-b pb-4">{selectedReceipt.merchant.toUpperCase()}</div>
                        <div className="flex justify-between border-b border-dashed pb-2 mb-4"><span>TARİH:</span> <span>{selectedReceipt.date}</span></div>
                        <div className="space-y-3 mb-auto text-sm">
                            <div className="flex justify-between"><span>Ürün 1 (Latte)</span> <span>75.00</span></div>
                            <div className="flex justify-between"><span>Ürün 2 (Kruvasan)</span> <span>70.50</span></div>
                        </div>
                        <div className="flex justify-between border-t-2 border-black pt-4 text-black font-bold text-lg mt-4"><span>TOPLAM</span> <span>{selectedReceipt.amount} TL</span></div>
                        <div className="mt-8 text-center text-[10px] text-gray-400">************ TEŞEKKÜRLER ************</div>
                    </div>
                </div>

                {/* SAĞ: Form ve AI Sonuçları */}
                <div className="w-1/2 flex flex-col bg-white">
                    {/* Modal Header */}
                    <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-blue-600">
                            <FaRobot className="text-xl" />
                            <h3 className="text-lg font-bold text-gray-800">AI Analiz Sonucu</h3>
                        </div>
                        <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50">
                            <FaTimes className="text-lg" />
                        </button>
                    </div>

                    {/* Modal Body */}
                    <div className="flex-1 p-8 overflow-y-auto">
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-6 flex gap-3">
                            <div className="mt-1"><FaRobot className="text-blue-600" /></div>
                            <div>
                                <p className="text-sm text-blue-800 font-medium">Güven Skoru: %94</p>
                                <p className="text-xs text-blue-600 mt-1">Yapay zeka verileri okudu. Lütfen hatalı kısımları düzeltip onaylayın.</p>
                            </div>
                        </div>

                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Firma Adı</label>
                                    <input type="text" defaultValue={selectedReceipt.merchant} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 font-medium focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tarih</label>
                                    <input type="date" defaultValue={selectedReceipt.date} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 font-medium focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Toplam Tutar</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-3.5 text-gray-500 font-bold">₺</span>
                                    <input type="number" defaultValue={selectedReceipt.amount || 0} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 pl-8 text-xl font-bold text-gray-800 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Kategori</label>
                                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 font-medium focus:bg-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                                    <option>Yemek & İçecek</option>
                                    <option>Market</option>
                                    <option>Ulaşım</option>
                                    <option>Ofis Giderleri</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Notlar</label>
                                <textarea rows={3} placeholder="İsteğe bağlı not ekle..." className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:bg-white focus:border-blue-500 outline-none transition-all"></textarea>
                            </div>
                        </form>
                    </div>

                    {/* Modal Footer */}
                    <div className="p-6 border-t border-gray-100 bg-gray-50 flex gap-4">
                        <button onClick={() => setIsModalOpen(false)} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2">
                            <FaCheck /> Doğrula ve Kaydet
                        </button>
                        <button className="px-5 border border-red-200 text-red-600 bg-white hover:bg-red-50 rounded-lg font-medium transition-colors">
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Receipts;