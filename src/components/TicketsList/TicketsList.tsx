import { useEffect, useState, useMemo } from 'react';
import { ClipLoader } from 'react-spinners';
import useActions from '../../redux/hooks/useActions';
import useTypedSelector from '../../redux/hooks/useTypedSelector';
import { ITicket } from '../../types';
import filterTickets from '../../utils/filterTickets';
import sortTickets from '../../utils/sortTickets';
import SortButtons from '../SortButtons';
import TicketCard from '../TicketCard';

function TicketsList() {
  const { ticketsLoad } = useActions();
  const allTickets = useTypedSelector((state) => state.tickets.data);
  const isTicketsLoading = useTypedSelector((state) => state.tickets.isLoading);
  const {
    isAllStopsChecked,
    isNonStopsChecked,
    isOneStopsChecked,
    isTwoStopsChecked,
    isThreeStopsChecked,
  } = useTypedSelector((state) => state.transfersForm);
  const sortBy = useTypedSelector((state) => state.sortBy);

  useEffect(() => {
    ticketsLoad();
  }, []);

  const [showedTicketsNumber, setShowedTicketsNumber] = useState<number>(5);

  const spinerWrapper = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const sortedTickets: ITicket[] = useMemo(
    () => sortTickets(allTickets, sortBy),
    [sortBy, allTickets],
  );

  const filteredAndSortedTickets = filterTickets(
    sortedTickets,
    isAllStopsChecked,
    isNonStopsChecked,
    isOneStopsChecked,
    isTwoStopsChecked,
    isThreeStopsChecked,
  );

  const showedTickets: ITicket[] = filteredAndSortedTickets.slice(0, showedTicketsNumber);

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
        showedTickets.map((ticket) => (
          <TicketCard
            key={`${ticket.carrier} ${ticket.price} ${ticket.segments[0].date} ${ticket.segments[1].date}`}
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
