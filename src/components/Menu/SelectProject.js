const SelectProject = (props) => {
    const onSelectTask = (event) => {
      props.onChooseProject(event.target.value);
    };
    return (
      <div>
        <select value={props.currentProject} onChange={onSelectTask}>
          <option value="expense-tracker">Expense Tracker</option>
          <option value="Task2">Task 2</option>
          <option value="Task3">Task 3</option>
        </select>
      </div>
    );
  };

export default SelectProject;