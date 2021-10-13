import './ExpenseItem.css';
import Card from './Card';
import deleteLogo from '../assets/trash.png';

function ExpenseItem(prop){
    const deleteItem = () => {
        prop.onDelete(prop.itemId);
    }
    return (
            <Card className="expenseItem">
            <div className="expenseDate"><h2>{prop.ExpenseDate}</h2></div>
            <div className="expenseDescription">
                <h3 className="itemName">{prop.ExpenseName}</h3>
                <div className="priceDiv">
                <div className="price">$ {prop.ExpensePrice}</div>
                <img src={deleteLogo} onClick={deleteItem}/>
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem;