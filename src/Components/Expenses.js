import ExpenseList from './ExpenseList';
import './Expense.css';
import Card from './Card';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseCharts from './ExpenseChart';

function Expenses(props){
  const [filterState,setFilterState] = useState('2021');

  const expenseFilter = filter =>{
    setFilterState(filter);
  };
    const expenseArray = props.dummyArray;

    const filteredExpenseArray = expenseArray.filter(e => {
      return e.ExpenseDate.toString().substring(0,4) === filterState;
    });


      return(
        <Card className="expense">
        <div className='expenseFilter'>
          <ExpenseFilter selected={filterState} onChangeFilter = {expenseFilter} />
        </div>
        <ExpenseCharts expenses={filteredExpenseArray}/>
        <div className="expenseList">
          <ExpenseList filteredArray = {filteredExpenseArray} onDelete = {props.onDelete}/>
        </div>
      </Card>
      );
}

export default Expenses;