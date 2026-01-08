import { NavLink } from 'react-router-dom';
import { FaChartPie, FaReceipt, FaChartLine, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <FaChartPie className="w-5 h-5" /> },
    { path: '/receipts', label: 'Faturalarım', icon: <FaReceipt className="w-5 h-5" /> },
    { path: '/reports', label: 'Raporlar', icon: <FaChartLine className="w-5 h-5" /> },
    { path: '/settings', label: 'Ayarlar', icon: <FaCog className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen hidden md:flex flex-shrink-0 transition-all duration-300">
      <div className="h-16 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-xl font-bold tracking-wider">SMART RECEIPT</h1>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span className="ml-3 font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-md">
            AY
          </div>
          <div>
            <p className="text-sm font-medium text-white">Ahmet Yılmaz</p>
            <p className="text-xs text-slate-400">Firma Hesabı</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;