import logo from './logo.svg';
import './App.css';
import Piano from './components/Piano'


function App() {

  return (
    <div className="app"> 
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" /> Piano
      </header>
      <div className="content">
          <Piano />
      </div>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
