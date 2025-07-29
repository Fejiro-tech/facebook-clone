import React from 'react';

import user from "../assets/user1.JPG";
import { MdHome, MdGroups } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineDesktop, AiFillClockCircle } from "react-icons/ai";
import { GoBookmarkFill } from "react-icons/go";
import Image from "next/image";

const LeftSidebar = () => {
    return (
        <div className='w-[16rem] hidden sm:block'>
            <div className='flex flex-col pt-6 sm:pt-12 pl-7'>
                {/* <div className='flex items-center font-bold'>
                    <MdHome className='w-9 h-9' />
                    <p className='ml-2'>Home</p>
                </div> */}


                <div className='flex items-center mt-4'>
                    <div className='w-10 h-10'>
                        <Image src={user} alt='' className='rounded-full' />
                    </div>
                    <p className='ml-2 font-bold'>Priscillia Osumaka</p>
                </div>

                <div className='flex items-center font-bold mt-4'>
                    <div className='bg-gradient-to-r from-[#0064e0] via-[#6f00ff] to-[#b400f6] w-9 h-9 rounded-full flex items-center p-1'>
                        <div className='w-7 h-7 bg-gray-200  rounded-full'></div>

                    </div>
                    <p className='ml-2'>Meta Ai</p>
                </div>

                <div className='border-b-2  border-b-gray-100 my-4'>
                    <div className='space-y-6'>
                        <div className='flex items-center '>
                            <BsPeopleFill className='w-8 h-8' />
                            <p className='ml-2 font-bold'>Friends</p>
                        </div>

                        <div className='flex items-center '>
                            <MdGroups className='w-8 h-8' />
                            <p className='ml-2 font-bold'>Groups</p>
                        </div>

                        <div className='flex items-center '>
                            <GoBookmarkFill className='w-8 h-8 ' />
                            <p className='ml-2 font-bold'>Saved</p>
                        </div>



                        <div className='flex items-center '>
                            <AiOutlineDesktop className='w-8 h-8' />
                            <p className='ml-2 font-bold'>Video</p>
                        </div>

                        <div className='flex items-center '>
                            <BsCart3 className='w-8 h-8' />
                            <p className='ml-2 font-bold'>Marketplace</p>
                        </div>

                        <div className='flex items-center '>
                            <BsCalendar2Fill className='w-7 h-7' />
                            <p className='ml-2 font-bold'>Events</p>
                        </div>
                        <div className='flex items-center '>
                            <AiFillClockCircle className='w-8 h-8' />
                            <p className='ml-2 font-bold'>Feeds</p>
                        </div>
                        <div className='flex items-center '>
                            <RiArrowDownSLine className='w-8 h-8' />
                            <p className='ml-2 '>See More</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default LeftSidebar