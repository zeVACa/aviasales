import classnames from 'classnames';
import { add } from 'date-fns';
import styles from './TicketCard.module.scss';

function formatPrice(price: number) {
  const priceStrReversed = price.toString().split('').reverse().join('');
  const result: string[] = [];

  for (let i = 0; i < priceStrReversed.length; i += 1) {
    if (i % 3 === 0) {
      result.push(' ');
      result.push(priceStrReversed[i]);
    } else {
      result.push(priceStrReversed[i]);
    }
  }

  return result.reverse().join('').trim();
}

function getStartTime(date: string): string {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function getEndTime(date: string, durationInMinutes: number): string {
  const addedDate = add(new Date(date), { minutes: durationInMinutes });

  const hours = new Date(addedDate).getHours();
  const minutes = new Date(addedDate).getHours();

  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function getTravelTime(durationInMinutes: number): string {
  const hoursAndMinutes = `${
    durationInMinutes < 24 * 60
      ? Math.floor(durationInMinutes / 60)
      : Math.floor((durationInMinutes / 60) % 24)
  }ч ${durationInMinutes % 60}м`;

  return durationInMinutes >= 60 * 24
    ? `${Math.floor(durationInMinutes / (60 * 24))}д ${hoursAndMinutes}`
    : hoursAndMinutes;
}

function getStops(stops: number): string {
  if (stops === 0) return '0 пересадок';
  if (stops === 1) return '1 пересадка';
  return `${stops} пересадки`;
}

interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

interface Props {
  price: number;
  iataCode: string;
  forward: Segment;
  backward: Segment;
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
