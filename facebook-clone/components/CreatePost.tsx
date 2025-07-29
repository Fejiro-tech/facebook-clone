import React from 'react'
import user from '../assets/user1.JPG';
import Image from 'next/image';
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";

const CreatePost = () => {
    return (
        <div className="w-screen sm:w-full ">
            <div className='max-w-[25rem] sm:max-w-[35rem] mx-auto sm:px-2  bg-white rounded-[1rem]'>

                <div className=" mt-8 flex items-center w-full p-3 ">
                    <div className="w-14 h-14 shrink-0">
                        <Image
                            src={user} alt=''
                            className='rounded-full'
                        />
                    </div>

                    <div className="flex items-center ml-3 w-full h-20">
                        <input type="text"
                            placeholder="What's on your mind, Osumaka?"
                            className='outline-0 bg-[#f2f3f7] p-1 rounded-full pl-3 w-full h-12 truncate'
                        />
                    </div>

                    <div className="flex items-center bg-blue-500 px-3 rounded-full h-12 ml-4">
                        <button className='font-bold text-white'>Post</button>
                    </div>

                </div>
                <div className="border-b-2 border-b-gray-100 my-4"></div>
                <div className="flex justify-between mx-3 sm:mx-9 pb-3">
                    <div className="flex items-center">

                        <div className="w-7 h-7">
                            <Image src={camera} alt='' />
                        </div>
                        <p className='pl-2 text-[14px]'>Live video</p>
                    </div>
                    <div className="flex items-center">

                        <div className="w-7 h-7">
                            <Image src={photos} alt='' />
                        </div>
                        <p className='pl-2 whitespace-nowrap text-[14px]'>Photo/video</p>
                    </div>
                    <div className="flex items-center">

                        <div className="w-7 h-7">
                            <Image src={smile} alt='' />
                        </div>
                        <p className='pl-2 text-[14px]'>Feeling/activity</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CreatePost