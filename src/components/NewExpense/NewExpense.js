import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const savedData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }

        props.onAddExpense(savedData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseHandler={saveExpenseDataHandler}/>
        </div>
    )

}

export default NewExpense;