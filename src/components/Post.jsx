
import { MdMoreHoriz } from "react-icons/md";
import olympics from '../assets/olympics2020.jpeg'


import React from 'react'
import { useState } from 'react'
import UserProfile from '../components/UserProfile'
import UserComment from '../components/UserComment'
import LikeIcon from './icons/LikeIcon'
import UnLikeIcon from './icons/UnLikeIcon'
import CommentIcon from './icons/CommentIcon'
import SaveIcon from './icons/SaveIcon'
import SharePostIcon from './icons/SharePostIcon'
import EmojiIcon from './icons/EmojiIcon'


function Post(props) {
    const { name, likes } = props
    const [isOpen, setIsOpen] = useState(true)
    const [likesCount, setLikesCount] = useState(likes)

    const toggle = () => {
        console.log('toggle')
        let newIsOpen = !isOpen
        let newLikeCount = isOpen ? likesCount + 1 : likesCount - 1
        setIsOpen(newIsOpen)
        setLikesCount(newLikeCount)
    }

    let userName = name ? name : `Pachorn`

    return (
        <div className="vh-100 flex flex-col post border-2 border-gray-primary mt-6 p-0 rounded-lg">
            <div className="flex items-center px-3 pt-2">
                <UserProfile iconSize="small" />
                <p className="pl-2 font-bold">{userName}</p>
                <MdMoreHoriz className="relative" />
            </div>
            <div className="mt-3">
                <img src={olympics} className="w-full" alt="" />
            </div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1 col-end-4">
                    <button className="p-2" onClick={toggle}>
                        {isOpen ? <LikeIcon /> : <UnLikeIcon />}
                    </button>
                    <button className="p-2">
                        <CommentIcon />
                    </button>
                    <button className="p-2">
                        <SharePostIcon />
                    </button>
                </div>
                <div className="col-end-12">
                    <button className="p-2">
                        <SaveIcon />
                    </button>
                </div>
            </div>
            <div className="pl-3 py-1">
                <p className="font-medium">
                    {likesCount} likes
                </p>
            </div>
            <div>
                <UserComment />
                <p className="px-2  text-gray-500">2 days</p>
            </div>
            <div className="flex px-5 py-5">
                <EmojiIcon />
                <input type="text" className="pl-5 focus:outline-none w-full" placeholder="Add a comment ..." />
                <p className="text-blue-400 pl-2">Post</p>
            </div>
        </div>

    )
}

export default Post