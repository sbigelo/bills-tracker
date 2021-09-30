import { Component } from 'react'
import UserCard from './UserCard'
import { deleteUser } from '../actions/deleteUser'
import { connect } from 'react-redux'
import styled from "styled-components"

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
            <Grid>
            <UserHeader>
                {users && users.length} Bill Payers: 
            </UserHeader>
            {userCard}
            </Grid>
        )
    }
}

export default connect(null, { deleteUser })(UserList)

const UserHeader = styled.div`
  text-align: center;
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`
const Grid = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`