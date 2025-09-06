import React from 'react'
import userImg from '../assets/user1.JPG';
import Image from 'next/image';
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';

const CreatePost = () => {
    const [postText, setPostText] = useState("");
    const [image, setImage] = useState(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageClick = () => {
        fileInputRef.current?.click(); // trigger hidden file input
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };


    const handlePost = async () => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const userId = user.id;

        if (!userId || !token) {
            alert("Please log in.");
            return;
        }

        if (!postText.trim()) {
            alert("Post cannot be empty.");
            return;
        }

        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("text", postText);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await axios.post("http://localhost:5000/api/posts", formData, {
                headers: {
                  Authorization: `Bearer ${token}`,
                
                },
              });

            alert("Post created successfully");
            setPostText(""); // clear input after success
            setImage(null);

        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to create post");
        }
    };

    return (
        <div className="w-screen sm:w-full ">
            <div className='max-w-[25rem] sm:max-w-[35rem] mx-auto sm:px-2  bg-white rounded-[1rem]'>

                <div className=" mt-8 flex items-center w-full p-3">
                    <div className="w-14 h-14 shrink-0">
                        <Image
                            src={userImg} alt=''
                            className='rounded-full'
                        />
                    </div>

                    <div className="flex items-center ml-3 w-full h-20">
                        <input type="text"
                            placeholder="What's on your mind, Osumaka?"
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            className='outline-0 bg-[#f2f3f7] p-1 rounded-full pl-3 w-full h-12 truncate'

                        />

                    </div>

                    <div className="flex items-center bg-blue-500 px-3 rounded-full h-12 ml-4">
                        <button
                            onClick={handlePost}
                            className='font-bold text-white'>
                            Post
                        </button>
                    </div>
                </div>

                {/* optional image preview */}
                {image && (
                    <div className="mt-2">
                        <p className="text-sm text-gray-600">Selected file: {image.name}</p>
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="mt-1 w-12 h-12 object-cover rounded"
                        />
                    </div>
                )}


                <div className="border-b-2 border-b-gray-100 my-4"></div>
                <div className="flex justify-between mx-3 sm:mx-9 pb-3">
                    <div className="flex items-center">

                        <div className="w-7 h-7">
                            <Image src={camera} alt='' />
                        </div>
                        <p className='pl-2 text-[14px]'>Live video</p>
                    </div>


                    {/* Hidden File Input */}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />


                    <div className="flex items-center cursor-pointer" onClick={handleImageClick}>

                        <div className="w-7 h-7">
                            <Image src={photos} alt='upload' />
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