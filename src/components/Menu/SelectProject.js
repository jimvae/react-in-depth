const SelectProject = (props) => {
    const onSelectTask = (event) => {
      props.onChooseProject(event.target.value);
    };
    return (
      <div>
        <select value={props.currentProject} onChange={onSelectTask}>
          <option value="expense-tracker">Expense Tracker</option>
          <option value="course-goals">Course Goals</option>
          <option value="users">Users</option>
        </select>
      </div>
    );
  };

export default SelectProject;