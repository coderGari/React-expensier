import './App.css';
import Expenses from './Components/Expenses';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's start learning</h1>
      </header>
      <div className="expenseContainer">
      <Expenses />
      </div>    
    </div>
  );
}

export default App;
