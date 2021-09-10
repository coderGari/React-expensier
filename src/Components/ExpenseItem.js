import './ExpenseItem.css';
import Card from './Card';

function ExpenseItem(prop){
    return (
    <Card className="expenseItem">
        <div className="expenseDate"><h3>{prop.ExpenseDate}</h3></div>
        <div className="expenseDescription">
            <h2 className="itemName">{prop.ExpenseName}</h2>
            <div className="price">$ {prop.ExpensePrice}</div>
        </div>
    </Card>
    )
}

export default ExpenseItem;