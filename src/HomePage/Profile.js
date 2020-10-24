import React from 'react'

class Profile extends React.Component{


    render(){
        return(
            <>
            <div id="profile">
                <img id="profilePic" src= "https://avatars3.githubusercontent.com/u/63001188?s=400&u=180cb73963c8a8d11478e2172a433a8e7b026937&v=4" />
                <br/>
                <h2 id="profileMainHeader">Welcome </h2>
                <br/>
                {/* <ul id="userInfo">
                    <li>Username:</li> 
                    <li>Password:</li>
                    <li>Email: </li>
                </ul>   */}
            </div>
            </>
        )
    }
}

export default Profile