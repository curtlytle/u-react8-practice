import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [users, setUsers] =useState([]);

    const addUserHandler = enteredUser => {
        setUsers(prevUsers => {
            return  [...prevUsers, enteredUser];
        });
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
