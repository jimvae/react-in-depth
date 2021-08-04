import { useState } from "react";
import Card from "../../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedFilter, setFilter] = useState("2021");

  const chooseFilterHandler = (filter) => {
    setFilter(filter);
    props.onFilterExpense(filter);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(selectedFilter);
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            currentFilter={selectedFilter}
            onChooseFilter={chooseFilterHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
