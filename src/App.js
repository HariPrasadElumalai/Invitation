// import logo from './logo.svg';
import './App.css';
import './Welcome Page';
import './Main Page';
import Welcome from './Welcome Page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{fontSize:"1.5em"}}>
          <Welcome />
        </div>
      </header>
    </div>
  );
}

export default App;
