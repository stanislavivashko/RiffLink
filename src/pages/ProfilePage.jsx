import { useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.css';

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate('/catalog')}>
        ← Назад до каталогу
      </button>

      <div className={styles.layout}>
        <div className={styles.mainInfo}>
          <div className={styles.headerCard}>
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80" 
              alt="Олег Кравець" 
              className={styles.avatar} 
            />
            <div>
              <div className={styles.nameRow}>
                <span className={styles.name}>Олег Кравець</span> ✔
              </div>
              <div className={styles.meta}>📍 Київ • ★ 4.9 (87 відгуків)</div>
              <div className={styles.tags}>
                <span className={styles.tag}>Рок</span>
                <span className={styles.tag}>Блюз</span>
              </div>
            </div>
          </div>

          <div className={styles.sectionTitle}>Про виконавця</div>
          <p className={styles.bio}>
            Сесійний гітарист із 12-річним досвідом. Записував партії для реклами, кіно та інді-гуртів.
          </p>

          <div className={styles.specGrid}>
            <div className={styles.specCard}>
              <div className={styles.specLabel}>Стрій гітари</div>
              <div className={styles.specVal}>Standart E</div>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specLabel}>Робочий темп</div>
              <div className={styles.specVal}>120 BPM</div>
            </div>
          </div>

          <div className={styles.sectionTitle}>🎸 Обладнання</div>
          <div className={styles.specGrid}>
            <div className={styles.specCard}>Fender Stratocaster</div>
            <div className={styles.specCard}>Focusrite Scarlett 2i2</div>
            <div className={styles.specCard}>Marshall JVM</div>
            <div className={styles.specCard}>Neural DSP</div>
          </div>
        </div>

        <aside className={styles.orderCard}>
          <div className={styles.priceTitle}>Вартість</div>
          <div className={styles.priceVal}>500 грн</div>
          <div className={styles.priceSub}>за запис партії</div>

          <button className={styles.mainOrderBtn} onClick={() => navigate('/workspace')}>
            Замовити партію
          </button>
        </aside>
      </div>
    </div>
  );
}