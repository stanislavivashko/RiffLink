import styles from './Header.module.css';

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logo} onClick={() => setCurrentPage('catalog')}>
          <span className={styles.logoIcon}>∿</span> RiffLink
        </div>
        <input 
          type="text" 
          placeholder="🔍 Пошук гітариста, стилю або обладнання..." 
          className={styles.searchBar} 
          readOnly 
        />
      </div>
      <nav className={styles.nav}>
        <button 
          className={`${styles.navBtn} ${currentPage === 'catalog' ? styles.activeBtn : ''}`}
          onClick={() => setCurrentPage('catalog')}
        >
          Каталог гітаристів
        </button>
        <button 
          className={`${styles.navBtn} ${currentPage === 'profile' ? styles.activeBtn : ''}`}
          onClick={() => setCurrentPage('profile')}
        >
          Профіль виконавця
        </button>
        <button 
          className={`${styles.navBtn} ${currentPage === 'workspace' ? styles.activeBtn : ''}`}
          onClick={() => setCurrentPage('workspace')}
        >
          Робоча зона замовлення
        </button>
      </nav>
    </header>
  );
}