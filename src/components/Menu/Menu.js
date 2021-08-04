import ExpenseTracker from '../ExpenseTracker/ExpenseTracker';
import SelectProject from './SelectProject';
import { useState } from 'react';

const Menu = () => {
    const [currentProject, setCurrentProject] = useState('expense-tracker');

    const chooseProject = project => setCurrentProject(project);
    return <div>
        <SelectProject currentProject={currentProject} onChooseProject={chooseProject} />
        {currentProject === 'expense-tracker' &&<ExpenseTracker/>}
        </div>
}

export default Menu;