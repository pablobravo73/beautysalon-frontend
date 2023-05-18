
import './App.css';
import './assets/Nav';
import Nav from "./assets/Nav";
import AppointmentsColumn from "./assets/ClientBar";
import SearchBar from "./assets/SearchBar";

function App() {
  return (
    <div className="App">
        <div className="main-container">
            <Nav />
            <div className="content">
            <SearchBar />
            </div>
            <div className="appointments-column">
            <AppointmentsColumn />
            </div>
        </div>
    </div>
  );
}

export default App;
