import { useEffect } from 'react';

import { ClipLoader } from 'react-spinners';
import useActions from '../../redux/hooks/useActions';
import useTypedSelector from '../../redux/hooks/useTypedSelector';
import SortButtons from '../SortButtons';
import TicketCard from '../TicketCard';

function TicketsList() {
  const { ticketsLoad } = useActions();
  const tickets = useTypedSelector((state) => state.tickets.data);
  const isTicketsLoading = useTypedSelector((state) => state.tickets.isLoading);
  const filters = useTypedSelector((state) => state.transfersForm);

  useEffect(() => {
    ticketsLoad();
  }, []);

  console.log('tickets', tickets);

  const spinerWrapper = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  const filteredTickets = tickets.filter((ticket) => {
    const stopsNumberForward = ticket.segments[0].stops.length;
    const stopsNumberBackward = ticket.segments[1].stops.length;

    if (
      filters.isAllStopsChecked ||
      (filters.isNonStopsChecked && stopsNumberForward === 0 && stopsNumberBackward === 0) ||
      (filters.isOneStopsChecked && stopsNumberForward === 1 && stopsNumberBackward === 1) ||
      (filters.isTwoStopsChecked && stopsNumberForward === 2 && stopsNumberBackward === 2) ||
      (filters.isThreeStopsChecked && stopsNumberForward === 3 && stopsNumberBackward === 3)
    ) {
      return true;
    }

    return false;
  });

  return (
    <div className="tickets">
      <SortButtons />
      {isTicketsLoading && (
        <div style={spinerWrapper}>
          <ClipLoader color="#2196F3" size={50} />
        </div>
      )}
      {filteredTickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          price={ticket.price}
          iataCode={ticket.carrier}
          forward={ticket.segments[0]}
          backward={ticket.segments[1]}
        />
      ))}
    </div>
  );
}

export default TicketsList;
