"use client";
import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
    return (
        <div className="w-screen sm:w-full">
            <div className='my-6 max-w-[25rem] sm:max-w-[35rem] mx-auto '>
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Posts