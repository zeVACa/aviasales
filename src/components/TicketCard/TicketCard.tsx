import classnames from 'classnames';
import styles from './TicketCard.module.scss';
import { getStartTime, getEndTime, getTravelTime } from '../../utils/getTime';
import formatPrice from '../../utils/formatPrice';
import { ISegment } from '../../types';

function getStops(stops: number): string {
  if (stops === 0) return '0 пересадок';
  if (stops === 1) return '1 пересадка';
  return `${stops} пересадки`;
}

interface Props {
  price: number;
  iataCode: string;
  forward: ISegment;
  backward: ISegment;
}

const TicketCard: React.FC<Props> = ({ price, iataCode, forward, backward }: Props) => (
  <div className={styles.ticket}>
    <div className={styles.gridRow}>
      <span className={styles.price}>{formatPrice(price)}Р</span>
      <img src={`//pics.avs.io/99/36/${iataCode}.png`} alt="s7 logo" className={styles.logo} />
    </div>
    <div className={classnames(styles.gridRow, styles.forward)}>
      <div>
        <p className={styles.textSecondary}>
          {forward.origin} – {forward.destination}
        </p>
        <p>
          {getStartTime(forward.date)} – {getEndTime(forward.date, forward.duration)}
        </p>
      </div>
      <div>
        <p className={styles.textSecondary}>В пути</p>
        <p>{getTravelTime(forward.duration)}</p>
      </div>
      <div>
        <p className={styles.textSecondary}>{getStops(forward.stops.length)}</p>
        <p>{forward.stops.join(', ')}</p>
      </div>
    </div>
    <div className={styles.gridRow}>
      <div>
        <p className={styles.textSecondary}>
          {backward.origin} – {backward.destination}
        </p>
        <p>
          {getStartTime(backward.date)} – {getEndTime(backward.date, backward.duration)}
        </p>
      </div>
      <div>
        <p className={styles.textSecondary}>В пути</p>
        <p>{getTravelTime(backward.duration)}</p>
      </div>
      <div>
        <p className={styles.textSecondary}>{getStops(backward.stops.length)}</p>
        <p>{backward.stops.join(', ')}</p>
      </div>
    </div>
  </div>
);

export default TicketCard;
