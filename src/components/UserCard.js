import React from 'react'
import styled from "styled-components"

const UserCard = ({user, handleDelete}) => {
    return (
        <Card>
            <UserWrap>
                <UserNames>
                    {user.first_name} {user.last_name}
                </UserNames>
            </UserWrap> 
            <DeleteButton onClick={() => handleDelete(user.id)}>Remove</DeleteButton>
        </Card>
    )

}

export default UserCard

const Card = styled.div`
  border-radius: 200px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 10px 10px 20px 10px;
  position: relative;
  background: white;
`
const UserWrap = styled.div`
  text-align: center;
  flex-direction: row;
`
const UserNames = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: 'Poppins-Bold';
  font-size: 25px;
`

const DeleteButton = styled.button`
  color: #fff;
  background-color: #0000FF;
  border-radius: 4px;   
  padding: flex;  
  border: 1px solid #71b406;
  width: 50%;
  margin-left: 25%;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`
