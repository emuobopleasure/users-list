import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

const AddUser = ({onAddUser}) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    const addUserHandler = (e) => {
        e.preventDefault()
        if( enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return
        }
        if ( +enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            })
        }
        // the onAddUser prop will be taking the enteredUsername and enteredAge states up to App. to addUserHandler function as a parameter
        onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser