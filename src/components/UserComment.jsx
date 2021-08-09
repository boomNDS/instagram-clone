

import React from 'react'
import { useState } from 'react'

import LikeIcon from './icons/LikeIcon'
import UnLikeIcon from './icons/UnLikeIcon'

function UserComment(props) {
    const { username, comment } = props
    const [isOpen, setIsOpen] = useState(true)

    const toggle = () => {
        console.log('toggle')
        let newIsOpen = !isOpen
        setIsOpen(newIsOpen)
    }

    let name = username ? username : `Pachorn`
    let userComment = comment ? comment : `Wow`

    return (
        <div className="flex m-2">
            <p className="font-bold">{name}</p>
            <p className="pl-2">{userComment}</p>
            <button className="pl-5" onClick={toggle}>
                {isOpen ? <LikeIcon iconSize="15" /> : <UnLikeIcon iconSize="15" />}
            </button>
        </div>


    )
}

export default UserComment