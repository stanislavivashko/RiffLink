import { useState } from 'react';
import Header from './components/Header';
import CatalogPage from './pages/CatalogPage';
import ProfilePage from './pages/ProfilePage';
import WorkspacePage from './pages/WorkspacePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('catalog');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#080808', fontFamily: 'sans-serif' }}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'catalog' && <CatalogPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'profile' && <ProfilePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'workspace' && <WorkspacePage setCurrentPage={setCurrentPage} />}
      </main>
    </div>
  );
}