import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CatalogPage.module.css';

const INITIAL_GUITARISTS = [
  {
    id: 1,
    name: 'Олег Кравець',
    rating: 4.9,
    city: 'Київ',
    reviewsCount: 87,
    style: 'Метал',
    tuning: 'Standart E',
    bpm: 120,
    price: 500,
    avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80',
  },
  {
    id: 2,
    name: 'Дмитро Гриценко',
    rating: 5.0,
    city: 'Львів',
    reviewsCount: 64,
    style: 'Рок',
    tuning: 'Drop D',
    bpm: 180,
    price: 650,
    avatar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80',
  },
  {
    id: 3,
    name: 'Андрій Мельник',
    rating: 4.8,
    city: 'Одеса',
    reviewsCount: 52,
    style: 'Блюз',
    tuning: 'Standart E',
    bpm: 90,
    price: 450,
    avatar: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80',
  },
];

export default function CatalogPage() {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState('Усі');
  const [selectedTuning, setSelectedTuning] = useState('Усі');
  const [maxBpm, setMaxBpm] = useState(220);
  const [playingId, setPlayingId] = useState(null);
  const [localSearch, setLocalSearch] = useState('');

  const filteredGuitarists = useMemo(() => {
    return INITIAL_GUITARISTS.filter((g) => {
      const matchSearch =
        g.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        g.city.toLowerCase().includes(localSearch.toLowerCase());
      const matchStyle = selectedStyle === 'Усі' || g.style === selectedStyle;
      const matchTuning = selectedTuning === 'Усі' || g.tuning === selectedTuning;
      const matchBpm = g.bpm <= maxBpm;

      return matchSearch && matchStyle && matchTuning && matchBpm;
    });
  }, [localSearch, selectedStyle, selectedTuning, maxBpm]);

  const togglePlay = (id) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  const handleOrder = (guitarist) => {
    navigate('/workspace', { state: { guitarist } });
  };

  const resetFilters = () => {
    setSelectedStyle('Усі');
    setSelectedTuning('Усі');
    setMaxBpm(220);
    setLocalSearch('');
  };

  return (
    <div className={styles.container}>
      <header className={styles.titleSection}>
        <h1>Каталог гітаристів</h1>
        <p>Обери сесійного гітариста під свій трек: прослухай хвилю, звір стрій і темп та замов запис партії напряму.</p>
      </header>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h3>⚡ Фільтри</h3>
            <button className={styles.resetBtn} onClick={resetFilters}>Скинути</button>
          </div>

          <div className={styles.filterGroup}>
            <label>Швидкий пошук</label>
            <input
              type="text"
              placeholder="Ім'я або місто..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterGroup}>
            <label>Стиль</label>
            <div className={styles.chipGroup}>
              {['Усі', 'Метал', 'Рок', 'Блюз'].map((style) => (
                <button
                  key={style}
                  className={selectedStyle === style ? styles.chipActive : styles.chip}
                  onClick={() => setSelectedStyle(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label>Стрій гітари</label>
            <div className={styles.chipGroup}>
              {['Усі', 'Drop D', 'Standart E'].map((tuning) => (
                <button
                  key={tuning}
                  className={selectedTuning === tuning ? styles.chipActive : styles.chip}
                  onClick={() => setSelectedTuning(tuning)}
                >
                  {tuning}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label>Темп: до {maxBpm} BPM</label>
            <input
              type="range"
              min="60"
              max="220"
              value={maxBpm}
              onChange={(e) => setMaxBpm(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.resultsInfo}>
            Знайдено виконавців: <strong>{filteredGuitarists.length}</strong>
          </div>

          <div className={styles.grid}>
            {filteredGuitarists.length > 0 ? (
              filteredGuitarists.map((g) => (
                <div key={g.id} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={g.avatar} alt={g.name} />
                  </div>

                  <div className={styles.cardHeader}>
                    <h4>{g.name}</h4>
                    <span className={styles.rating}>★ {g.rating}</span>
                  </div>

                  <p className={styles.subText}>{g.city} • {g.reviewsCount} відгуків</p>

                  <div className={styles.badges}>
                    <span className={styles.badge}>{g.tuning}</span>
                    <span className={styles.badge}>{g.bpm} BPM</span>
                    <span className={styles.badge}>{g.style}</span>
                  </div>

                  <div className={styles.playerControl}>
                    <button className={styles.playBtn} onClick={() => togglePlay(g.id)}>
                      {playingId === g.id ? '⏸' : '▶'}
                    </button>
                    <div className={styles.waveBar}>
                      <div
                        className={styles.waveProgress}
                        style={{ width: playingId === g.id ? '60%' : '0%' }}
                      />
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.priceTag}>
                      <strong>{g.price} грн</strong>
                      <span>за запис партії</span>
                    </div>

                    <button className={styles.orderBtn} onClick={() => handleOrder(g)}>
                      Замовити партію
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>Гітаристів за вказаними фільтрами не знайдено.</p>
                <button onClick={resetFilters} className={styles.resetBtnBig}>
                  Скинути фільтри
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}