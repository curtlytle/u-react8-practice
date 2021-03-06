import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    // if we use the refs, we wouldn't need these listeners
    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
       setError(null);
    };

    const addUserHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please an age greater then zero.'
            });
            return;
        }

        // we could use the refs here instead... as an option
        const userData = {
            id: Math.random().toString(),
            name: enteredUsername,
            age: enteredAge,
        };

        props.onAddUser(userData);
        setEnteredUserName('');
        setEnteredAge('');
        // if we use refs, we'd do this to clear out the values
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }



    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type='text'
                        value={enteredUsername}
                        onChange={userNameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="userage">Age (Years)</label>
                    <input
                        id="userage"
                        type='number'
                        value={enteredAge}
                        onChange={userAgeChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;