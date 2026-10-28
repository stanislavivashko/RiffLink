import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './WorkspacePage.module.css';

export default function WorkspacePage() {
  const location = useLocation();
  const selectedGuitarist = location.state?.guitarist || { name: 'Не обрано' };

  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendOrder = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.workspaceContainer}>
      <h2>Робоча зона замовлення</h2>
      <p>Виконавець: <strong>{selectedGuitarist.name}</strong></p>

      {isSubmitted ? (
        <div className={styles.successMessage}>
          ✓ Замовлення успішно відправлено гітаристу {selectedGuitarist.name}!
        </div>
      ) : (
        <form onSubmit={handleSendOrder} className={styles.orderForm}>
          <div className={styles.inputGroup}>
            <label>Технічне завдання / Коментар до треку</label>
            <textarea
              rows="5"
              placeholder="Опишіть бажану партію, темп, стрій та побажання щодо звучання..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submitOrderBtn}>
            Підтвердити та відправити ТЗ
          </button>
        </form>
      )}
    </div>
  );
}