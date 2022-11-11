import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { transfersFilterPropertyToggle } from '../../redux/actions/actionCreators';
import useTypedSelector from '../../redux/hooks/useTypedSelector';
import styles from './StopsFilter.module.scss';

const StopsFilter: React.FC = () => {
  const dispatch = useDispatch();

  const transfersForm = useTypedSelector((state) => state.transfersForm);

  return (
    <div className={styles.stopsFilter}>
      <div className={styles.title}>Количество пересадок</div>
      <form action="">
        <ul className={styles.list}>
          <li>
            <label htmlFor="all-stops" className={styles.item}>
              <input
                type="checkbox"
                name=""
                id="all-stops"
                className={classNames(styles.realCheckbox, 'pseudo-hidden')}
                checked={transfersForm.isAllStopsChecked}
                onChange={() => dispatch(transfersFilterPropertyToggle('isAllStopsChecked'))}
                tabIndex={1}
              />
              <span className={styles.customCheckbox} />
              Все
            </label>
          </li>
          <li>
            <label htmlFor="without-stops" className={styles.item}>
              <input
                type="checkbox"
                name=""
                id="without-stops"
                className={classNames(styles.realCheckbox, 'pseudo-hidden')}
                checked={transfersForm.isNonStopsChecked}
                onChange={() => dispatch(transfersFilterPropertyToggle('isNonStopsChecked'))}
              />
              <span className={styles.customCheckbox} />
              Без пересадок
            </label>
          </li>
          <li>
            <label htmlFor="one-stop" className={styles.item}>
              <input
                type="checkbox"
                name=""
                id="one-stop"
                className={classNames(styles.realCheckbox, 'pseudo-hidden')}
                checked={transfersForm.isOneStopsChecked}
                onChange={() => dispatch(transfersFilterPropertyToggle('isOneStopsChecked'))}
              />
              <span className={styles.customCheckbox} />1 пересадка
            </label>
          </li>
          <li>
            <label htmlFor="two-stops" className={styles.item}>
              <input
                type="checkbox"
                name=""
                id="two-stops"
                className={classNames(styles.realCheckbox, 'pseudo-hidden')}
                checked={transfersForm.isTwoStopsChecked}
                onChange={() => dispatch(transfersFilterPropertyToggle('isTwoStopsChecked'))}
              />
              <span className={styles.customCheckbox} />2 пересадки
            </label>
          </li>
          <li>
            <label htmlFor="three-stops" className={styles.item}>
              <input
                type="checkbox"
                name=""
                id="three-stops"
                className={classNames(styles.realCheckbox, 'pseudo-hidden')}
                checked={transfersForm.isThreeStopsChecked}
                onChange={() => dispatch(transfersFilterPropertyToggle('isThreeStopsChecked'))}
              />
              <span className={styles.customCheckbox} />3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default StopsFilter;
