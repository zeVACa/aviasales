import SortButtons from './components/SortButtons';
import StopsFilter from './components/StopsFilter';
import TicketCard from './components/TicketCard';
import Logo from './images/Logo.png';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <div className="logo-wrapper">
          <img src={Logo} alt="123" className="logo" />
        </div>
        <div className="content-wrapper">
          <StopsFilter />
          <div className="tickets">
            <SortButtons />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
