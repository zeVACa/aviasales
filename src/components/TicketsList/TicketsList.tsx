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

  useEffect(() => {
    ticketsLoad();
  }, []);

  console.log('tickets', tickets);

  const spinerWrapper = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div className="tickets">
      <SortButtons />
      {isTicketsLoading ? (
        <div style={spinerWrapper}>
          <ClipLoader color="#2196F3" size={50} />
        </div>
      ) : (
        tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            price={ticket.price}
            iataCode={ticket.carrier}
            forward={ticket.segments[0]}
            backward={ticket.segments[1]}
          />
        ))
      )}
    </div>
  );
}

export default TicketsList;
