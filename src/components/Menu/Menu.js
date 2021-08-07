import ExpenseTracker from '../ExpenseTracker/ExpenseTracker';
import SelectProject from './SelectProject';
import CourseGoals from '../CourseGoals/CourseGoals';
import Users from '../Users/Users';
import { useState } from 'react';

const Menu = () => {
    const [currentProject, setCurrentProject] = useState('course-goals');

    const chooseProject = project => setCurrentProject(project);
    return <div>
        <SelectProject currentProject={currentProject} onChooseProject={chooseProject} />
        {currentProject === 'expense-tracker' && <ExpenseTracker/>}
        {currentProject === "course-goals" && <CourseGoals/>}
        {currentProject === "users" && <Users/>}
        </div>
}

export default Menu;