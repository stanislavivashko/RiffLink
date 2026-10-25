import { useNavigate } from 'react-router-dom';
import styles from './WorkspacePage.module.css';

export default function WorkspacePage() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 70px)' }}>
      <div className={styles.container}>
        <div className={styles.iconBox}>🎧</div>
        <div className={styles.title}>Немає активного замовлення</div>
        <p className={styles.text}>
          Оберіть гітариста в каталозі та натисніть «Замовити партію», щоб відкрити робочу зону з чатом.
        </p>
        <button className={styles.catalogBtn} onClick={() => navigate('/catalog')}>
          Перейти до каталогу
        </button>
      </div>

      <footer className={styles.footer}>
        <div>© 2026 RiffLink — маркетплейс сесійних гітаристів</div>
        <div>Живі гітари для твоїх треків</div>
      </footer>
    </div>
  );
}