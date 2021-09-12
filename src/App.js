import './App.css';
import Expenses from './Components/Expenses';
import NewExpense from './Components/AddExpense/NewExpense';

function App() {
  const addNewExpense = newExpense => {
    console.log('In expenses');
    console.log(newExpense);
  } 
  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's Start Learning</h2>
      </header>
      <div className="newExpense">
      <NewExpense onAddExpense = {addNewExpense} />
      </div>
      <div className="expenseContainer">
      <Expenses />
      </div>    
    </div>
  );
}

export default App;
