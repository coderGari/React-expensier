import './ExpenseItem.css';
import Card from './Card';

function ExpenseItem(prop){

    return (
    <Card className="expenseItem">
        <div className="expenseDate"><h2>{prop.ExpenseDate}</h2></div>
        <div className="expenseDescription">
            <h3 className="itemName">{prop.ExpenseName}</h3>
            <div className="price">$ {prop.ExpensePrice}</div>
        </div>
    </Card>
    )
}

export default ExpenseItem;