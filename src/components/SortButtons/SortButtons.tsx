import classnames from 'classnames';
import styles from './SortButtons.module.scss';

function SortButtons() {
  return (
    <div className={styles.wrapper}>
      <input type="radio" name="sort" id="cheap" className={styles.realRadio} defaultChecked />
      <label htmlFor="cheap" className={classnames(styles.fakeRadio, styles.fakeRadioLeft)}>
        Самый дешевый
      </label>
      <input type="radio" name="sort" id="fast" className={styles.realRadio} />
      <label htmlFor="fast" className={classnames(styles.fakeRadio, styles.fakeRadioRight)}>
        Самый быстрый
      </label>
    </div>
  );
}

export default SortButtons;
