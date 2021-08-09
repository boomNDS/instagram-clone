

import React from 'react'

function UserProfile(props) {
    const { iconSize, storyBorder, image } = props

    function getRandomInt() {
        let max = 70
        let min = 1
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let randomId = getRandomInt()
    let userImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`

    return (
        <div className={` ${storyBorder ? "storyBorder" : ""}`}>
            <img className={`userProfile ${iconSize}`} src={userImage} alt="profile" />
        </div>
    )
}

export default UserProfile