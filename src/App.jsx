import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import CatalogPage from './pages/CatalogPage';
import ProfilePage from './pages/ProfilePage';
import WorkspacePage from './pages/WorkspacePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#080808' }}>
      <Header />
      <main style={{ width: '100%', boxSizing: 'border-box' }}>
        <Routes>
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/workspace" element={<WorkspacePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/catalog" replace />} />
        </Routes>
      </main>
    </div>
  );
}