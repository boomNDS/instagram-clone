import Nav from '../components/Nav'
import StoryCards from '../components/StoryCards'
import Post from '../components/Post'

import React from 'react'

let PostList = [];
let comment = ['That cool', " Amazing. I'm getting the early 2000a tingle.", "❤️❤️❤️"]
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
for (let i = 0; i < 6; i++) {
    PostList.push(<Post likes={getRandomInt(1, 1000)} />)
}


function Home() {


    return (
        <div className="">
            <Nav />
            <div className="container home py-16 flex justify-center max-w-70">
                <div>
                    <StoryCards />
                    {PostList}
                </div>
            </div>
        </div>
    )
}

export default Home