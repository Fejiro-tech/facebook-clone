import React from 'react'
import LeftSidebar from './LeftSidebar'
import Stories from './Stories'
import CreatePost from './CreatePost'
import Posts from './Posts'
import RightSidebar from './RightSidebar'

const Feed = () => {
    return (
        <div className='flex bg-[#f2f3f7]'>
            {/* left sidebar */}
            <LeftSidebar/>

            <div className="mx-auto">
                {/* createpost */}
                <CreatePost />

                {/* stories */}
                <Stories />

                {/* posts */}
                <Posts />
            </div>

            {/* right sidebar */}
            <RightSidebar />
        </div>
    )
}

export default Feed