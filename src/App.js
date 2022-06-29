import React, { useState, Fragment } from "react";
import AddUser from "./User/AddUser";
import UsersList from "./User/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return (
        [...prevUsersList],
        { name: uName, age: uAge, id: Math.random().toString() }
      );
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
  /* ugyanaz mint a felső
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
  */
}

export default App;
