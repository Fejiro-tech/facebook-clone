import React from 'react';
import facebookLogo from "../assets/facebook1.png";
import Image from 'next/image';
import user from '../assets/user1.JPG';

import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage, AiOutlineShop } from "react-icons/ai";

const Header = () => {
    return (
        <div className='p-4 flex items-center justify-between border-b-2 border-b-gray-100 lg-px-8'>
            {/* left side */}
            <div className='flex items-center mr-2'>
                <div className='w-10 h-10'>
                    <Image src={facebookLogo} alt='facebook-logo' />
                </div>

                <div className='ml-2'>
                    <input
                        type="text"
                        placeholder='Search facebook'
                        className='ml-2 outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4 hidden sm:block'
                    />
                </div>

            </div>

            {/* middle */}

            <div className='flex items-center mr- space-x-10'>
                <MdHome className='w-9 h-9' />
                {/* <FiFlag className='w-7 h-7' /> */}
                <FiPlayCircle className='w-7 h-7' />
                <AiOutlineShop className='w-7 h-7' />
                <GrGroup className='w-7 h-7' />
            </div>

            {/* right */}

            <div className='flex space-x-6 items-center' >
                <div className=' space-x-6 hidden md:flex ml-0'>

                    <GrAppsRounded className='w-7 h-7' />
                    <FaBell className='w-7 h-7' />
                    <AiOutlineMessage className='w-7 h-7' />
                </div>

                <div className='h-10 w-10'>
                    <Image src={user} alt='user' className='rounded-full' />
                </div>
                
            </div>

        </div>
    )
}

export default Header