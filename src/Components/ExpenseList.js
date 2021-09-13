import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props){
    let listItems = <p>No expense found.</p>;

    if(props.filteredArray.length > 0){
      listItems = props.filteredArray.map(expenseList => 
        <ExpenseItem
          Key={expenseList.id}
          ExpenseDate={expenseList.ExpenseDate} 
          ExpenseName={expenseList.ExpenseName} 
          ExpensePrice={expenseList.ExpensePrice}/>
        );
    }

    return(
        <div className="list">
            {listItems}
        </div>
    );

}

export default ExpenseList;