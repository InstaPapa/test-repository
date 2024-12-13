import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект негрика";

  
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Негры</h1>
         {greeting}
      </header>
    </div>
  );
}

export default App;

//посиделки ff ytмм
