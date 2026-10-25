import { useNavigate } from 'react-router-dom';
import styles from './CatalogPage.module.css';

const GUITARISTS = [
  {
    id: 1,
    name: 'Олег Кравець',
    location: 'Київ • 87 відгуків',
    rating: '★ 4.9',
    tags: ['Standart E', '120 BPM'],
    price: '500 грн',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80'
  },
  {
    id: 2,
    name: 'Дмитро Гриценко',
    location: 'Львів • 64 відгуки',
    rating: '★ 5.0',
    tags: ['Drop D', '180 BPM'],
    price: '650 грн',
    img: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&q=80'
  },
  {
    id: 3,
    name: 'Андрій Мельник',
    location: 'Одеса • 52 відгуки',
    rating: '★ 4.8',
    tags: ['Standart E', '90 BPM'],
    price: '450 грн',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80'
  }
];

export default function CatalogPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Каталог гітаристів</h1>
      <p className={styles.subtitle}>
        Обери сесійного гітариста під свій трек: прослухай хвилю, звір стрій і темп та замов запис партії напряму.
      </p>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <div className={styles.filterHeader}>⚡ Фільтри</div>
          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Стиль</div>
            <div className={styles.tagGroup}>
              <span className={`${styles.tag} ${styles.activeTag}`}>Метал</span>
              <span className={styles.tag}>Рок</span>
              <span className={styles.tag}>Блюз</span>
            </div>
          </div>
          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Стрій гітари</div>
            <div className={styles.tagGroup}>
              <span className={styles.tag}>Drop D</span>
              <span className={styles.tag}>Standart E</span>
            </div>
          </div>
          <div className={styles.filterGroup}>
            <div className={styles.filterLabel}>Темп до 220 BPM</div>
            <input type="range" min="60" max="220" defaultValue="220" className={styles.slider} />
          </div>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.resultsCount}>Знайдено виконавців: 6</div>
          <div className={styles.grid}>
            {GUITARISTS.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.img} alt={item.name} className={styles.cardImage} />
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <span className={styles.artistName}>{item.name}</span>
                    <span className={styles.rating}>{item.rating}</span>
                  </div>
                  <div className={styles.location}>{item.location}</div>
                  
                  <div className={styles.badgeRow}>
                    {item.tags.map((t, i) => <span key={i} className={styles.badge}>{t}</span>)}
                  </div>

                  <div className={styles.playerRow}>
                    <button className={styles.playBtn}>▶</button>
                    <span className={styles.time}>0:00 / 0:42</span>
                  </div>

                  <div className={styles.cardFooter}>
                    <div>
                      <div className={styles.price}>{item.price}</div>
                      <div className={styles.priceSub}>за запис партії</div>
                    </div>
                    <button className={styles.orderBtn} onClick={() => navigate('/profile')}>
                      Замовити партію
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}