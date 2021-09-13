import { useState } from 'react';
import './AddExpenseButton.css';
import AddExpenseForm from './AddExpenseForm';

const AddExpenseButton = (props) => {

    const [formDisplay,setFormDisplay] = useState(false);

    let display = <button onClick = {showExpenseForm}>Add Expense</button>;

    if(formDisplay===true){
        console.log(formDisplay);
       display = <AddExpenseForm newId={props.preId} onAddExpense={props.onAddExpense} onHide = {hideExpenseForm} />;
    }

   function showExpenseForm(){
    setFormDisplay(true);
    }
    function hideExpenseForm(){
        setFormDisplay(false);
        }

    return(
        <div className="formContainer">
        {display}
        </div>
    );
}

export default AddExpenseButton;