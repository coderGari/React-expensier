import { useState } from 'react';
import './AddExpenseForm.css';

function AddExpenseForm(props){
    
    const [userInput,setUserInput] = useState({
        id:'',
        ExpenseName: '',
        ExpensePrice: '',
        ExpenseDate: ''
    });
    
    const [newId,setNewId] = useState(props.newId);
    
    const titleChangeHandler = (event) =>{
        setUserInput((prevSate)=>{
            return {...prevSate,
            ExpenseName: event.target.value}
        });
    }
    
    const amountChangeHandler = (event) =>{
        setUserInput((prevSate)=>{
            return {...prevSate,
            ExpensePrice: event.target.value}
        });
    }
    
    const dateChangeHandler = (event) =>{
        setUserInput((prevSate)=>{
            return {...prevSate,
            ExpenseDate: event.target.value}
        });
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(props.newId);
        setNewId((preId)=> {return preId+1})
        const newExpenseData = {
            id:newId,
            ExpenseName: userInput.ExpenseName,
            ExpensePrice: +userInput.ExpensePrice,
            ExpenseDate:userInput.ExpenseDate
        }
    
        console.log(newExpenseData);
    
        props.onAddExpense(newExpenseData);
    
        //Reset form
        setUserInput({
            ExpenseName: '',
            ExpensePrice: '',
            ExpenseDate: ''
        });
    };

    return(
        <form className="Expense_form" onSubmit={submitHandler}>
            <div className="expenseName">
                <label>Title</label>
                <input type='text' value={userInput.ExpenseName} onChange={titleChangeHandler}></input>
            </div>
            <div className="expensePrice">
                <label>Price</label>
                <input type='number' value={userInput.ExpensePrice} onChange={amountChangeHandler}></input>
            </div>
            <div className="newExpenseDate">
                <label>Date</label>
                <input type='date' min='2020-01-01' max='2024-01-01'
                 value={userInput.ExpenseDate} onChange={dateChangeHandler}></input>
            </div>
            <div className="submitBtn">
                <button onClick = {props.onHide}>Cancle</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default AddExpenseForm;