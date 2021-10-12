import { Component } from 'react'
import UserCard from './UserCard'
import { deleteUser } from '../actions/deleteUser'
import { connect } from 'react-redux'
import styled from "styled-components"

class UserList extends Component {

    handleDelete = (user) => {
        this.props.deleteUser(user, user.bill_id)
        console.log('x')
    }

    render() {
        const { users } = this.props
        const userCard = users != null && users.length > 0 ? users.map(user =>
            <UserCard key={user.id} user={user} handleDelete={() => this.handleDelete(user)}></UserCard>
        ) : <Center>Add one below!</Center>
        console.log('x')
        const check = users != null && users.length != 1  
        ? "s" : null
        return (
            <Grid>
            <UserHeader>
                {users && users.length} Bill Payer{check}: 
            </UserHeader>
            {userCard}
            </Grid>
        )
    }
}

export default connect(null, { deleteUser })(UserList)

const Center = styled.div`
  text-align: center; 
`

const UserHeader = styled.div`
  text-align: center;
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: black;
`
const Grid = styled.div`
  border-radius: 1px;
  border: 1px solid #e6e6e6;
  padding: 5px;
  margin: 0px 0px 5px 15px;
  position: relative;
  margin-right: 0px;
  background: #f6f1f0;
`