import styles from './ProfilePage.module.css';

export default function ProfilePage({ setCurrentPage }) {
  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => setCurrentPage('catalog')}>
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
            Сесійний гітарист із 12-річним досвідом. Записував партії для реклами, кіно та інді-гуртів. Швидко відчуваю настрій треку й додаю живий вайб.
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

          <div className={styles.sectionTitle}>🎵 Приклади партій</div>
          <div className={styles.wavePlayer}>
            <button style={{ borderRadius: '50%', border: 'none', width: '36px', height: '36px', cursor: 'pointer' }}>▶</button>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Modern Rock — приспів</div>
              <div style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.2rem' }}>░▒▓▒░▒▓▒░▒▓▒░▒▓▒░▒▓▒░▒▓▒░ 0:00 / 0:42</div>
            </div>
          </div>
        </div>

        <aside className={styles.orderCard}>
          <div className={styles.priceTitle}>Вартість</div>
          <div className={styles.priceVal}>500 грн</div>
          <div className={styles.priceSub}>за запис партії</div>

          <ul className={styles.featureList}>
            <li>✔ До 2 правок безкоштовно</li>
            <li>✔ Формат WAV 24-bit / 48 kHz</li>
            <li>✔ Термін: 2–4 дні</li>
          </ul>

          <button className={styles.mainOrderBtn} onClick={() => setCurrentPage('workspace')}>
            Замовити партію
          </button>
        </aside>
      </div>
    </div>
  );
}