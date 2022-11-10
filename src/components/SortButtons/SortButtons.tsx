/* eslint-disable */
import { useState } from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { sortOptimal, sortPrice, sortSpeed } from '../../redux/actions/actionCreators';
import useTypedSelector from '../../redux/hooks/useTypedSelector';
import styles from './SortButtons.module.scss';

function SortButtons() {
  const [activeSortButton, setActiveSortButton] = useState<'cheap' | 'speed' | 'optimal'>('cheap');

  const dispatch = useDispatch();
  const sortBy = useTypedSelector((state) => state.sortBy);

  return (
    <div className={styles.wrapper}>
      <button
        className={classnames(styles.button, activeSortButton === 'cheap' && styles.buttonActive)}
        onClick={() => {
          setActiveSortButton('cheap');
          dispatch(sortPrice());
        }}
      >
        Самые дешевые
      </button>
      <button
        className={classnames(styles.button, activeSortButton === 'speed' && styles.buttonActive)}
        onClick={() => {
          setActiveSortButton('speed');
          dispatch(sortSpeed());
        }}
      >
        Самые быстрые
      </button>
      <button
        className={classnames(styles.button, activeSortButton === 'optimal' && styles.buttonActive)}
        onClick={() => {
          setActiveSortButton('optimal');
          dispatch(sortOptimal());
        }}
      >
        Оптимальные
      </button>
    </div>
  );
}

export default SortButtons;
