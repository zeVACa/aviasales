import { ITicket } from '../types';

const sortTickets = (tickets: ITicket[], sortBy: 'price' | 'speed' | 'optimal') =>
  tickets.sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'speed') {
      return (
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
      );
    }

    return (
      a.price -
      b.price +
      (a.segments[0].duration + a.segments[1].duration) -
      (b.segments[0].duration + b.segments[1].duration)
    );
  });

export default sortTickets;
