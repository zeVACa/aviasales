import StopsFilter from './components/StopsFilter';
import TicketsList from './components/TicketsList';
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
          <TicketsList />
        </div>
      </div>
    </div>
  );
}

export default App;
