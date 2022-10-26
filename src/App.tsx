import SortButtons from './components/SortButtons';
import StopsFilter from './components/StopsFilter';
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
