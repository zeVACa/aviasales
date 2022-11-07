/* eslint-disable */
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { sortPrice, sortSpeed } from '../../redux/actions/actionCreators';
import useTypedSelector from '../../redux/hooks/useTypedSelector';
import styles from './SortButtons.module.scss';

function SortButtons() {
  const dispatch = useDispatch();
  const sortBy = useTypedSelector((state) => state.sortBy);

  return (
    <div className={styles.wrapper}>
      <input
        type="radio"
        name="sort"
        id="cheap"
        className={styles.realRadio}
        checked={sortBy === 'price'}
        onChange={() => dispatch(sortPrice())}
      />
      <label htmlFor="cheap" className={classnames(styles.fakeRadio, styles.fakeRadioLeft)}>
        Самый дешевый
      </label>
      <input
        type="radio"
        name="sort"
        id="fast"
        className={styles.realRadio}
        checked={sortBy === 'speed'}
        onChange={() => dispatch(sortSpeed())}
      />
      <label htmlFor="fast" className={classnames(styles.fakeRadio, styles.fakeRadioRight)}>
        Самый быстрый
      </label>
    </div>
  );
}

export default SortButtons;
