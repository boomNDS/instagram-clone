import React from 'react'
import Story from '../components/Story'
import OverflowWrapper from 'react-overflow-wrapper';


function Stories() {
    return (
        <div className="stories flex border-2 border-gray-primary mt-6 p-2">
            <OverflowWrapper>
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
            </OverflowWrapper>
        </div>
    )
}

export default Stories