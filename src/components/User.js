import React from 'react';
import { connect } from 'react-redux'





const User = (props) => {
    const { user } = props;
    return (
        <div>
            
        
                {/* <h1>{user.first_name} {user.last_name}</h1> */}
                <p>
                    Welcome to your bills tracker main page. All of your current bills are listed below.
                </p>
           
            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.user }
}
export default connect(mapStateToProps)(User)