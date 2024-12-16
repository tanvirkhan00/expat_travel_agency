import React from 'react';

// Image

import image from "../assets/trip.png";
import image1 from "../assets/profile.png";
import image2 from "../assets/friends.png";
import image3 from "../assets/onlineFriends.png";

const Processing = () => {
    return (
        <>

            <section className='bg-white'>
                <div className="container mt-[100px] py-[50px]">
                    <div>
                        <div className='text-center'>
                            <h1 className='text-[48px] font-semibold'>How It Works</h1>
                            <p className='text-gray-dark'>Search and find other travelers heading to the same destination.</p>
                        </div>
                        <div className='mt-[30px] flex justify-between flex-wrap gap-y-[30px] relative'>
                            <div className='md:basis-[40%] bgHover px-[20px] py-[10px]'>
                                <h2 className='text-[24px] font-semibold'>Plan Your Trip</h2>
                                <p className='text-gray-dark'>Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</p>
                                <div className='flex items-center justify-center'>
                                    <img src={image} alt="" />
                                </div>
                            </div>
                            <div className='md:basis-[40%] bgHover px-[20px] py-[10px]'>
                                <div className='flex items-center justify-center'>
                                    <img src={image1} alt="" />
                                </div>
                                <h2 className='text-[24px] font-semibold'>Explore Matching Profiles</h2>
                                <p className='text-gray-dark'>Browse through profiles of like-minded women who are traveling to similar locations. You can filter results based on your travel dates, needs, and values.</p>
                            </div>
                            <div className='md:basis-[40%] bgHover px-[20px] py-[10px]'>
                                <h2 className='font-semibold text-[24px]'>Connect and Build Relationships</h2>
                                <p className='text-gray-dark'>Send messages, ask questions, and get to know potential housemates before committing. Building rapport ensures a comfortable and trusted connection for your shared journey</p>
                                <div className='flex items-center justify-center'>
                                    <img src={image2} alt="" />
                                </div>
                            </div>
                            <div className='md:basis-[40%] bgHover px-[20px] py-[10px]'>
                                <div className='flex items-center justify-center'>
                                    <img src={image3} alt="" />
                                </div>
                                <h2 className='text-[24px] font-semibold'>Secure Your Plans & Enjoy the Journey.</h2>
                                <p className='text-gray-dark'>Once you’ve found the right housemate, finalize your arrangements with confidence. With a trusted companion, you can travel with peace of mind and enjoy every moment.</p>
                            </div>
                            <span className='hidden md:block absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transform w-[5px] h-[550px] bg-gray-dark'></span>
                            <span className='hidden  absolute border-[1px] border-gray-dark w-[68px] h-[68px] font-bold text-[25px] md:flex items-center justify-center rounded-full left-1/2 -translate-x-1/2 bg-white'>1</span>
                            <span className='hidden absolute border-[1px] border-gray-dark w-[68px] h-[68px] font-bold text-[25px] md:flex items-center justify-center rounded-full left-1/2 -translate-x-1/2 bottom-[58%] bg-white'>2</span>
                            <span className='hidden absolute border-[1px] border-gray-dark w-[68px] h-[68px] font-bold text-[25px] md:flex items-center justify-center rounded-full left-1/2 -translate-x-1/2 bottom-[30%] bg-white'>3</span>
                            <span className='hidden absolute border-[1px] border-gray-dark w-[68px] h-[68px] font-bold text-[25px] md:flex items-center justify-center rounded-full left-1/2 -translate-x-1/2 bottom-0 bg-white'>4</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Processing;