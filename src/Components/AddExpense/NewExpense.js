import { useState } from 'react';
import './NewExpense.css'

function NewExpense(props){
    const [userInput,setUserInput] = useState({
        title: '',
        price: '',
        date: ''
    });

    const titleChangeHandler = (event) =>{
        setUserInput((prevSate)=>{
            return {...prevSate,
            title: event.target.value}
        });
    }

    const amountChangeHandler = (event) =>{
        setUserInput((prevSate)=>{
            return {...prevSate,
            price: event.target.value}
        });
    }

    const dateChangeHandler = (event) =>{
        setUserInput((prevSate)=>{
            return {...prevSate,
            date: event.target.value}
        });
    }

const submitHandler = (event) => {
    event.preventDefault();
    const newExpenseData = {
        title: userInput.title,
        price:userInput.price,
        date:userInput.date
    }
    
    console.log(newExpenseData);

    props.onAddExpense(newExpenseData);
};

return(
    <div className="Expense_form_container">
        <form className="Expense_form" onSubmit={submitHandler}>
            <div className="expenseName">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div className="expensePrice">
                <label>Price</label>
                <input type='number' onChange={amountChangeHandler}></input>
            </div>
            <div className="newExpenseDate">
                <label>Date</label>
                <input type='date' min='2020-01-01' max='2024-01-01'
                 onChange={dateChangeHandler}></input>
            </div>
            <div className="submitBtn">
                <button type='submit'>Save</button>
            </div>
        </form>
    </div>
);
}

export default NewExpense;