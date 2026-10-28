import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && search.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/catalog" className={styles.logo}>
        ~ <span>RiffLink</span>
      </Link>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Пошук гітариста, стилю або обладнання..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearchSubmit}
        />
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.navBtn)}
        >
          Каталог гітаристів
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.navBtn)}
        >
          Профіль виконавця
        </NavLink>
        <NavLink
          to="/workspace"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.navBtn)}
        >
          Робоча зона замовлення
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.navBtn)}
        >
          Увійти
        </NavLink>
      </nav>
    </header>
  );
}