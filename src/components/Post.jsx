
// import Storys from '../components/Storys'

import React from 'react'
import UserProfile from '../components/UserProfile'
import { MdMoreHoriz } from "react-icons/md";
import olympics from '../assets/olympics2020.jpeg'

// let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];
// let itemList = [];
// items.forEach((item, index) => {
//     itemList.push(<div className="circle bg-gray-400 ring-2 ring-red-500">
//     </div>)
// })

function Post(props) {
    const { name } = props
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

        </div>

    )
}

export default Post