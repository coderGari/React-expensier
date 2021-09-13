import './NewExpense.css'
import AddExpenseButton from './AddExpenseButton';

function NewExpense(props){
return(
    <div className="Expense_form_container">
        <AddExpenseButton preId = {props.newId} onAddExpense={props.onAddExpense}/>
    </div>
);
}

export default NewExpense;