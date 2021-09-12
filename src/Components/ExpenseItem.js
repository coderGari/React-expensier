import './ExpenseItem.css';
import Card from './Card';
import {useState} from 'react';

function ExpenseItem(prop){
    const [title,setTitle] = useState(prop.ExpenseName);

    const clickHandler = () =>{
        console.log(title);
        setTitle('updated');
    };

    return (
    <Card className="expenseItem">
        <div className="expenseDate"><h2>{prop.ExpenseDate}</h2></div>
        <div className="expenseDescription">
            <h3 className="itemName">{title}</h3>
            <div className="price">$ {prop.ExpensePrice}</div>
        </div>
        <button onClick={clickHandler}>Rename</button>
    </Card>
    )
}

export default ExpenseItem;