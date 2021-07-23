import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const savedData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };

    props.onAddExpense(savedData);
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseHandler={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
