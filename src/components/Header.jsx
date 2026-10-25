import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Link to="/catalog" className={styles.logo}>
          <span className={styles.logoIcon}>∿</span> RiffLink
        </Link>
        <input 
          type="text" 
          placeholder="🔍 Пошук гітариста, стилю або обладнання..." 
          className={styles.searchBar} 
          readOnly 
        />
      </div>
      <nav className={styles.nav}>
        <NavLink 
          to="/catalog" 
          className={({ isActive }) => `${styles.navBtn} ${isActive ? styles.activeBtn : ''}`}
        >
          Каталог гітаристів
        </NavLink>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => `${styles.navBtn} ${isActive ? styles.activeBtn : ''}`}
        >
          Профіль виконавця
        </NavLink>
        <NavLink 
          to="/workspace" 
          className={({ isActive }) => `${styles.navBtn} ${isActive ? styles.activeBtn : ''}`}
        >
          Робоча зона замовлення
        </NavLink>
      </nav>
    </header>
  );
}