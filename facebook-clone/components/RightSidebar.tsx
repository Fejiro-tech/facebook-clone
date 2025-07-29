import React from 'react';

import albert from "../assets/1albert.jpg";
import arnold from "../assets/1arnold.jpg";
import drphil from "../assets/1drphil.webp";
import elon from "../assets/1elon.webp";
import kobe from "../assets/1kobe.webp";
import miketyson from "../assets/1miketyson.jpg";
import mrbeast from "../assets/1mrbeast.jpg";
import rihana from "../assets/1rihana.jpg";
import therock from "../assets/1rock.jpg";

import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import dots from "../assets/dots.png";
import Image from "next/image";
import { profile } from 'console';


const RightSidebar = () => {

  const profiles = [
    { name: "Albert E.", photo: albert },
    { name: "Arnold S.", photo: arnold },
    { name: "Dr Phill", photo: drphil },
    { name: "Elon Musk", photo: elon },
    { name: "Kobe Briant", photo: kobe },
    { name: "Mike Tyson", photo: miketyson },
    { name: "Mr Beast", photo: mrbeast },
    { name: "Rihana", photo: rihana },
    { name: "The Rock", photo: therock },
  ]

  return (
    <div className='w-[20rem] hidden lg:block'>
      <div className=' pt-8 sm:pt-12 pr-7'>
        <div className="space-y-4">
        <p className='pr-4 font-bold text-[#8e8d8d]'>Birthdays</p>
        <div className='flex items-center whitespace-wrap mb-8 space-x-2'>
          <div>
            <FaGift className='w-8 h-8 '/>
          </div>
          <p className='text-[14px] '><strong>Dr Phill </strong>and <strong>5 others</strong> have birthdays toady.</p>
        </div>

        </div>
       
        <div className='border-b-1 border-b-gray-200'></div>

        <div className="flex items-center justify-between">
          <p className='pr-4 font-bold text-[#8e8d8d]'>Contacts</p>
          <div className='flex items-center
         space-x-2'>
            <FiSearch />
            <div className='w-7 h-7'>
              <Image src={dots} alt='dots' />
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          {profiles.map((profile) => (
            <div className="flex items-center">
              <div className='relative w-12 h-12 flex '>
                <img src={profile.photo.src}
                  className=' rounded-full object-cover'
                />
                <div className='absolute w-3.5 h-3.5 bg-green-500 rounded-full bottom-0 right-0.5 border-2 border-white'></div>
              </div>
              <p className='pl-3 font-semibold'>{profile.name}</p>
            </div>

          ))}
        </div>

      </div>
    </div>

  )
}

export default RightSidebar