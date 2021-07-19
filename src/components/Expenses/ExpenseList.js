import ExpenseItem from "./ExpenseItem";
import { useState } from 'react';
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
  const [ selectedFilter, setFilter ] = useState("2021")

  const chooseFilterHandler = (filter) => {
    setFilter(filter);
    props.onFilterExpense(filter);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter currentFilter={selectedFilter} onChooseFilter={chooseFilterHandler} />

        {props.expenses.map((expense, index) => {
          return (
            <div key={`expenseItem-${index}`}>
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default ExpenseList;
