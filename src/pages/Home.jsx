import Nav from '../components/Nav'
import StoryCards from '../components/StoryCards'

import React from 'react'

function Home() {
    return (
        <div className="">
            <Nav />
            <div className="container home mx-auto max-w-screen-lg h-full py-16 flex justify-center">
                {/* <div className="overflow-hidden my-6 p-2 shadow "> */}
                <StoryCards />
                {/* </div> */}
                {/* <div className="hidden md:flex">Mobile</div> */}
            </div>
        </div>
    )
}

export default Home