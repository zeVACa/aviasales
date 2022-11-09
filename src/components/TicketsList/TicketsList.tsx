import { useEffect, useState } from 'react';

import { ClipLoader } from 'react-spinners';
import useActions from '../../redux/hooks/useActions';
import useTypedSelector from '../../redux/hooks/useTypedSelector';
import SortButtons from '../SortButtons';
import TicketCard from '../TicketCard';

function TicketsList() {
  const { ticketsLoad } = useActions();
  const allTickets = useTypedSelector((state) => state.tickets.data);
  const isTicketsLoading = useTypedSelector((state) => state.tickets.isLoading);
  const filters = useTypedSelector((state) => state.transfersForm);
  const sortBy = useTypedSelector((state) => state.sortBy);

  useEffect(() => {
    ticketsLoad();
  }, []);

  const [showedTicketsNumber, setShowedTicketsNumber] = useState<number>(5);

  const spinerWrapper = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  const filteredAndSortedTickets = allTickets
    .filter((ticket) => {
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
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      return (
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
      );
    })
    .slice(0, showedTicketsNumber);

  return (
    <div className="tickets">
      <SortButtons />
      {isTicketsLoading && (
        <div style={spinerWrapper}>
          <ClipLoader color="#2196F3" size={50} />
        </div>
      )}
      {!isTicketsLoading && filteredAndSortedTickets.length === 0 ? (
        <h3>Не найдено ни одного билета</h3>
      ) : (
        filteredAndSortedTickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            price={ticket.price}
            iataCode={ticket.carrier}
            forward={ticket.segments[0]}
            backward={ticket.segments[1]}
          />
        ))
      )}
      {!isTicketsLoading && filteredAndSortedTickets.length !== 0 && (
        <button
          className="show-more-button"
          onClick={() =>
            setShowedTicketsNumber((prevShowedTicketsNumber) => prevShowedTicketsNumber + 5)
          }
        >
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  );
}

export default TicketsList;
