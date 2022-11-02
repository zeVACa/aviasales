import React from 'react';
import { useDispatch } from 'react-redux';
import {
  transfersFilterAllStopsToggle,
  transfersFilterNonStopsToggle,
  transfersFilterOneStopsToggle,
  transfersFilterThreeStopsToggle,
  transfersFilterTwoStopsToggle,
} from '../../redux/actions/actionCreators';
import useTypedSelector from '../../redux/hooks/useTypedSelector';
import styles from './StopsFilter.module.scss';

const StopsFilter: React.FC = () => {
  const dispatch = useDispatch();

  const transfersForm = useTypedSelector((state) => state.transfersForm);

  return (
    <div className={styles.stopsFilter}>
      <div className={styles.title}>Количество пересадок</div>
      <ul className={styles.list}>
        <li>
          <label htmlFor="all-stops" className={styles.item}>
            <input
              type="checkbox"
              name=""
              id="all-stops"
              className={styles.realCheckbox}
              checked={transfersForm.isAllStopsChecked}
              onChange={() => dispatch(transfersFilterAllStopsToggle())}
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
              className={styles.realCheckbox}
              checked={transfersForm.isNonStopsChecked}
              onChange={() => dispatch(transfersFilterNonStopsToggle())}
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
              className={styles.realCheckbox}
              checked={transfersForm.isOneStopsChecked}
              onChange={() => dispatch(transfersFilterOneStopsToggle())}
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
              className={styles.realCheckbox}
              checked={transfersForm.isTwoStopsChecked}
              onChange={() => dispatch(transfersFilterTwoStopsToggle())}
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
              className={styles.realCheckbox}
              checked={transfersForm.isThreeStopsChecked}
              onChange={() => dispatch(transfersFilterThreeStopsToggle())}
            />
            <span className={styles.customCheckbox} />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default StopsFilter;
