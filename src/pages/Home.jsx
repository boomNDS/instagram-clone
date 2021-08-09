import Nav from '../components/Nav'
import StoryCards from '../components/StoryCards'
import Post from '../components/Post'

import React from 'react'

let PostList = [];
for (let i = 0; i < 6; i++) {
    PostList.push(<Post />)
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