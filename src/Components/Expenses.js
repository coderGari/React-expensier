import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from './Card';

function Expenses(){
    const expenseArray = [
        {
          ExpenseDate:"Sep 09, 2021",
          ExpenseName:"Car Insurance",
          ExpensePrice:265.67
        },
        {
          ExpenseDate:"Sep 09, 2021",
          ExpenseName:"Home Insurance",
          ExpensePrice:1265.67
        },
        {
          ExpenseDate:"Sep 09, 2021",
          ExpenseName:"Life Insurance",
          ExpensePrice:400.67
        }
      ];

      return(
        <Card className="expense">
        <ExpenseItem ExpenseDate={expenseArray[0].ExpenseDate} ExpenseName={expenseArray[0].ExpenseName} ExpensePrice={expenseArray[0].ExpensePrice}/>
        <ExpenseItem ExpenseDate={expenseArray[1].ExpenseDate} ExpenseName={expenseArray[1].ExpenseName} ExpensePrice={expenseArray[1].ExpensePrice}/>
        <ExpenseItem ExpenseDate={expenseArray[2].ExpenseDate} ExpenseName={expenseArray[2].ExpenseName} ExpensePrice={expenseArray[2].ExpensePrice} />
      </Card>
      );
}

export default Expenses;