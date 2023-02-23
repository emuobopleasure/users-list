import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import logo from './logo.svg';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return ([...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()}])
    })
  }

  return (
    <div className="App">
      {/* passing addUserHandler function to AddUser.js component through onAddUser prop to get the enteredUsername and enteredAge values */}
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
