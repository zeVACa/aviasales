import classnames from 'classnames';
import styles from './TicketCard.module.scss';
import logo from '../../images/s7-logo.png';

function TicketCard() {
  return (
    <div className={styles.ticket}>
      <div className={styles.flexRow}>
        <span className={styles.price}>13 400 Р</span>
        <img src={logo} alt="s7 logo" />
      </div>
      <div className={classnames(styles.flexRow, styles.forward)}>
        <div>
          <p className={styles.textSecondary}>MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </div>
        <div>
          <p className={styles.textSecondary}>В пути</p>
          <p>21ч 15м</p>
        </div>
        <div>
          <p className={styles.textSecondary}>2 пересадки</p>
          <p>HKG, JNB</p>
        </div>
      </div>
      <div className={styles.flexRow}>
        <div>
          <p className={styles.textSecondary}>MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </div>
        <div>
          <p className={styles.textSecondary}>В пути</p>
          <p>21ч 15м</p>
        </div>
        <div>
          <p className={styles.textSecondary}>2 пересадки</p>
          <p>HKG, JNB</p>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
