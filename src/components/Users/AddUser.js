import React, { useState, useRef } from 'react';

import Card from '../UI/Card2';
import Button from '../UI/Button2';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const enteredAge = useRef();
  const enteredName = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const age = enteredAge.current.value;
    const name = enteredName.current.value;
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(name, age);
    enteredAge.current.value = ''; // manipulates the DOM directly
    enteredName.current.value = ''; // manipulates the DOM directly
    // normally manipulating the DOM directly is not advised, but this case it is just to clear the input

  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={enteredName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;