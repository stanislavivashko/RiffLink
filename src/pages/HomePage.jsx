import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Знайди свій ідеальний гітарний риф</h1>
      <p className={styles.subtitle}>
        Платформа для сесійних гітаристів, саунд-продюсерів та музикантів. Замовляй записи або продавай власні рифи.
      </p>
    </div>
  );
}