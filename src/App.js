import logo from './logo.svg';
import './App.css';

function App() {
  const name = "ИИ 2.0";

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Добропожаловать в мой проект</h1>
         <p>{name} 🧠</p>
      </header>
    </div>
  );
}

export default App;
