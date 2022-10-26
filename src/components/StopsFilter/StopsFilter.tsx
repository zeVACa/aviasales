import React from 'react';
import styles from './StopsFilter.module.scss';

function StopsFilter() {
  return (
    <div className={styles.stopsFilter}>
      <div className={styles.title}>Количество пересадок</div>
      <ul className={styles.list}>
        <li>
          <label htmlFor="all-stops" className={styles.item}>
            <input type="checkbox" name="" id="all-stops" className={styles.realCheckbox} />
            <span className={styles.customCheckbox} />
            Все
          </label>
        </li>
        <li>
          <label htmlFor="without-stops" className={styles.item}>
            <input type="checkbox" name="" id="without-stops" className={styles.realCheckbox} />
            <span className={styles.customCheckbox} />
            Без пересадок
          </label>
        </li>
        <li>
          <label htmlFor="one-stop" className={styles.item}>
            <input type="checkbox" name="" id="one-stop" className={styles.realCheckbox} />
            <span className={styles.customCheckbox} />1 пересадка
          </label>
        </li>
        <li>
          <label htmlFor="two-stops" className={styles.item}>
            <input type="checkbox" name="" id="two-stops" className={styles.realCheckbox} />
            <span className={styles.customCheckbox} />2 пересадки
          </label>
        </li>
        <li>
          <label htmlFor="three-stops" className={styles.item}>
            <input type="checkbox" name="" id="three-stops" className={styles.realCheckbox} />
            <span className={styles.customCheckbox} />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
}

export default StopsFilter;
