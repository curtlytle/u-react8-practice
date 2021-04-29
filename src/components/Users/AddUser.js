import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = props => {
    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const addUserHandler = event => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }

        const userData = {
            id: Math.random().toString(),
            name: enteredUsername,
            age: enteredAge,
        };

        console.log(userData);

        setEnteredUserName('');
        setEnteredAge('');
        props.onAddUser(userData);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type='text' value={enteredUsername} onChange={userNameChangeHandler}/>
                <label htmlFor="userage">Age (Years)</label>
                <input id="userage" type='number' value={enteredAge} onChange={userAgeChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;