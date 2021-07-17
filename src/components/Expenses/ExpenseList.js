import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './ExpenseList.css';
const ExpenseList = (props) => {
  return (
    <Card className='expenses'>
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default ExpenseList;
