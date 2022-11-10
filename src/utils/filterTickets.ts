import { ITicket } from '../types';

const filterTickets = (
  tickets: ITicket[],
  isAllStopsChecked: boolean,
  isNonStopsChecked: boolean,
  isOneStopsChecked: boolean,
  isTwoStopsChecked: boolean,
  isThreeStopsChecked: boolean,
): ITicket[] =>
  tickets.filter((ticket) => {
    const stopsNumberForward = ticket.segments[0].stops.length;
    const stopsNumberBackward = ticket.segments[1].stops.length;

    const isStopsNumberMatchFilterProperty = (
      isPropertyChecked: boolean,
      stopsNumberInTicket: number,
    ) =>
      isPropertyChecked &&
      stopsNumberForward === stopsNumberInTicket &&
      stopsNumberBackward === stopsNumberInTicket;

    if (
      isAllStopsChecked ||
      isStopsNumberMatchFilterProperty(isNonStopsChecked, 0) ||
      isStopsNumberMatchFilterProperty(isOneStopsChecked, 1) ||
      isStopsNumberMatchFilterProperty(isTwoStopsChecked, 2) ||
      isStopsNumberMatchFilterProperty(isThreeStopsChecked, 3)
    ) {
      return true;
    }

    return false;
  });

export default filterTickets;
