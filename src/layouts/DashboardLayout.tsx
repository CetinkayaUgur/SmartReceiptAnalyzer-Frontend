import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full w-full relative overflow-hidden">
        
        {/* Mobil Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:hidden flex-shrink-0">
             <h2 className="text-xl font-semibold text-gray-800">Smart Receipt</h2>
        </header>

        {/* Sayfa İçeriği */}
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;