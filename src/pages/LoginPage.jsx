import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h2 style={{ margin: 0 }}>Вхід до RiffLink</h2>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input className={styles.input} type="email" placeholder="Email" required />
        <input className={styles.input} type="password" placeholder="Пароль" required />
        <button className={styles.button} type="submit">Увійти</button>
      </form>
    </div>
  );
}