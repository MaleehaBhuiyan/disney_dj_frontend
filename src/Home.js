import React from 'react'
import Profile from './HomePage/Profile.js'

class Home extends React.Component{

    //going to have to change this later 

    
    render(){
        return(
            <>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Profile user={this.props.user} />
            </>
        )
    }
}

export default Home