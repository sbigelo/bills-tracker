import React from 'react'
import styled from "styled-components"

const Home = () => {
    return (
        <Welcome>
            <Header>Welcome To Bills Tracker!</Header>
            <p>An application that allows you to track the progress of all of your bills.</p>
            <br></br>
            <p>It also allows you to add a bill payer to the list, whether it be a roommate, significant other, or family member.</p>
            <img src='https://www.thedailymeal.com/sites/default/files/2018/05/24/dreamstime_s_19750716_1_.jpg' width="500" height="300" alt='Home'/>
        </Welcome>
       
    )
}

export default Home

const Welcome = styled.div`
body {
    background-color: #f6f1f0;
 }
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f6f1f0;
`

const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
      font-size: 42px;
  }
`