import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Receipts from './pages/Receipts';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from './pages/Login';       // <-- Yeni
import Register from './pages/Register'; // <-- Yeni

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* PUBLIC ROUTES (Sidebar YOK, Tam Ekran) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED ROUTES (Sidebar VAR, İçeride) */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="receipts" element={<Receipts />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Bilinmeyen link gelirse Login'e at (veya Dashboard'a) */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;