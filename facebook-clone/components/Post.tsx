import React from 'react';
import user from "../assets/user1.JPG";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import hearth from "../assets/hearth.png";
import like from "../assets/like.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import share from "../assets/share.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";

const Post = () => {

  return (
    <div className='bg-white rounded-[1rem] px-5 py-4 '>
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12">
            <Image src={user} alt='user' className='rounded-full' />
          </div>
          <div className='ml-3'>
            <p className='font-bold '>Priscilia Osumaka</p>

            <div className="flex">
              <p className='text-xs '>3 hours ago &#8226; </p>
              <BiWorld className='ml-1 shrink-0' />
            </div>
          </div>
        </div>

        <div className="w-10 h-10">
          <Image src={dots} alt='' />
        </div>
      </div>

      {/* input */}
      <div className="my-3 ">
        <p>Simple, yet chic.</p>
      </div>

      {/* image */}
      <div className="-mx-5">
        <Image src={user} alt='image' />
      </div>

      {/* number of likes * buttons */}
      <div className="">
        <div className="flex justify-between text-[#8e8d8d] mt-1">
          <div className="flex items-center ">
            <div className="w-[1.1rem] h-[1.1rem]">
              <Image src={like} alt='like' />
            </div>
            <div className="ml-[2px] w-5 h-5">
              <Image src={hearth} alt='hearticon' />
            </div>
            <p className='pl-2 whitespace-nowrap text-[15px] sm:text-[16px]'>Anita Jay and 1,107 other</p>
          </div>
          <p className='whitespace-nowrap text-[15px] sm:text-[16px]'>272 Comments</p>
        </div>

        <div className="border-b-1 border-b-gray-200 my-2">
        </div>

        <div className="flex justify-between mx-6">
          <div className="flex items-center">
            <BiLike className='w-6 h-6' />
            <p className='pl-2 text-[18px]'>Like</p>
          </div>
          <div className="flex items-center">
            <FaRegCommentAlt className='w-5 h-5' />
            <p className='pl-2 text-[18px]'>Comment</p>
          </div>
          <div className="flex items-center">
            <div className='w-6 h-6' >

              <Image src={share} alt='share-icon' />
            </div>
            <p className='pl-2 text-[18px]'>Share</p>
          </div>
        </div>

        <div className="border-b-1 border-b-gray-200 my-2">
        </div>

      </div>


      {/* comment section */}
      <div className="max-h-40 overflow-y-scroll">
        <div className="flex justify-between text-[#8e8d8d]">
          <p>See 272 previous comments</p>
          <div className='flex items-center'>
            <p>Most Relevant </p>
            <RiArrowDownSLine />

          </div>
        </div>
        {/* first commennt */}
        <div className="">
          <div className="flex items-center mt-3">
            <div className="w-10 h-10">
              <Image src={user} className='rounded-full' alt='user' />
            </div>
            <p className='ml-2 font-bold'>Priscillia Osumaka</p>
            <p className='ml-2 '>Wow you look gorgeous😍</p>
          </div>

          <div className="ml-[3rem] flex -mt-1.5">
            <p className='mr-2'>Like</p>
            <p>Reply</p>
          </div>
        </div>

        {/* second comment */}
        <div className="">
          <div className="flex items-center mt-3">
            <div className="w-10 h-10">
              <Image src={user} className='rounded-full' alt='user' />
            </div>
            <p className='ml-2 font-bold'>Priscillia Osumaka</p>
            <p className='ml-2 '>Wow you look gorgeous😍</p>
          </div>

          <div className="ml-[3rem] flex -mt-1.5">
            <p className='mr-2'>Like</p>
            <p>Reply</p>
          </div>
        </div>

        {/* 3rd comment */}
        <div className="">
          <div className="flex items-center mt-3">
            <div className="w-10 h-10">
              <Image src={user} className='rounded-full' alt='user' />
            </div>
            <p className='ml-2 font-bold'>Priscillia Osumaka</p>
            <p className='ml-2 '>Wow you look gorgeous😍</p>
          </div>

          <div className="ml-[3rem] flex -mt-1.5">
            <p className='mr-2'>Like</p>
            <p>Reply</p>
          </div>
        </div>

        

      </div>


      {/* input */}
      <div className="flex items-center mt-4">
        <div className=" w-10 h-10 shrink-0">
          <Image src={user} alt='user' className='rounded-full' />
        </div>
        <div className="w-full ml-2 bg-[#f2f3f7] rounded-full flex items-center relative">
          <input type="text"
            placeholder='Write a comment'
            className='outline-0 bg-[#f2f3f7] p-2 rounded-full w-full'
          />
          <div className="flex absolute right-[4.5rem] space-x-2 text-[#8e8d8d]">

            <BiSmile />
            <AiOutlineCamera />
            <AiOutlineGif />
          </div>
          <div className="mr-4 bg-blue-400 text-white rounded-full">

            <button className='font-bold px-2 '>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post