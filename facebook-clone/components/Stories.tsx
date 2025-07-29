import React from 'react';
import Image from 'next/image';

import therock from "../assets/therock.jpg";
import therock2 from "../assets/therock2.webp";
import therock20 from "../assets/therock20.jpg";
import mike from "../assets/1miketyson.jpg";
import mikeprofile from "../assets/mikeprofile.webp";
import mrbeastbackground from "../assets/mrbeastbackground.webp";
import mrbeast from "../assets/1mrbeast.jpg";
import kobebackground from "../assets/kobebackground.jpg";
import kobe from "../assets/1kobe.webp";
import arnoldbackground from "../assets/arnoldbackground.webp";
import arnold from "../assets/1arnold.jpg";


const Stories = () => {
    const stories = [
        { profile: therock, background: therock20 },
        { profile: mikeprofile, background: therock },
        { profile: mrbeast, background: mrbeastbackground },
        { profile: kobe, background: kobebackground },
        { profile: mikeprofile, background: mike },
        { profile: arnold, background: arnoldbackground },

    ];

    return (
        <div className="flex items-center w-screen sm:w-full h-42 px-2 mt-6 sm:mt-8">
            <div className="w-full flex justify-between space-x-2 p-1 mx-auto max-w-[25rem] sm:max-w-[35rem] px-2 bg-white rounded-[1rem]">
                {stories.map((story) => (
                    <div  className="relative flex w-[4.4rem] h-32 sm:w-24 sm:h-40 rounded-[1rem] ">
                        <div className="flex">
                            <Image src={story.background} alt='' className='flex object-cover rounded-[1rem]' />
                            <div className=" flex absolute top-1 left-1 w-10 h-10 p-1 bg-blue-600 rounded-full">
                                <Image src={story.profile} alt='' className='rounded-full object-cover'
                        />
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </div>

    )
}

export default Stories