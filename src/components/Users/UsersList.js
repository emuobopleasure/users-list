import React from 'react'
import Card from '../UI/Card'

const UsersList = ({users}) => {
    return (
        <Card>
            <ul>
                { users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList