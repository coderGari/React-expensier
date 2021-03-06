import './App.css';
import Expenses from './Components/Expenses';
import NewExpense from './Components/AddExpense/NewExpense';
import { useState } from 'react';

const expenseArray = [
  {
    id:1,
    ExpenseDate:"2021-01-10",
    ExpenseName:"Car Insurance",
    ExpensePrice:265.67
  },
  {
    id:2,
    ExpenseDate:"2021-02-11",
    ExpenseName:"Home Insurance",
    ExpensePrice:365.67
  },
  {
    id:3,
    ExpenseDate:"2021-03-12",
    ExpenseName:"Life Insurance",
    ExpensePrice:400.67
  }
];


function App() {

  const [expenses,setExpenses] = useState(expenseArray);

  const addNewExpense = newExpense => {
    setExpenses((preState) => {
      return [newExpense, ...preState];
    });
  }
  const onDelete = id => {
    let oldExpeenseList = [...expenses];
    const newList = oldExpeenseList.filter((item) => item.id !== id);
    setExpenses(newList);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>BUDGET FIXER</h2>
      </header>
      <div className="newExpense">
      <NewExpense newId={expenses.length} onAddExpense = {addNewExpense} />
      </div>
      <div className="expenseContainer">
      <Expenses dummyArray = {expenses} onDelete = {onDelete}/>
      </div>    
    </div>
  );
}

export default App;
