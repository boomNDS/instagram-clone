import React from 'react'
import UserProfile from '../components/UserProfile'
import users from "../assets/users.json"



function Story() {
    let userName = users[Math.floor(Math.random() * users.length)].username
    if (userName.length > 10) {
        userName = userName.substring(0, 10) + "..."
    }
    return (
        <div className="story">
            <UserProfile iconSize="big" storyBorder={true} />
            <p className="userName">{userName}</p>
        </div>
    )
}

export default Story