import { Component } from 'react'
import UserCard from './UserCard'
import { deleteUser } from '../actions/deleteUser'
import { connect } from 'react-redux'

class UserList extends Component {

    handleDelete = (user) => {
        this.props.deleteUser(user, user.bill_id)
    }

    render() {
        const { users } = this.props
        const userCard = users != null && users.length > 0 ? users.map(user =>
            <UserCard key={user.id} user={user} handleDelete={() => this.handleDelete(user)}></UserCard>
        ) : null
        return (
            <div>
            <h2>{users && users.length} Bill Payers: </h2>
            {userCard}
            </div>
        )
    }
}

export default connect(null, { deleteUser })(UserList)
