import React from 'react'

const UserCard = ({user, handleDelete}) => {
    return (
        <div>
            <br></br>
            <div>{user.first_name} {user.last_name}</div> 
            <br></br>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <br></br>
        </div>
    )

}

export default UserCard