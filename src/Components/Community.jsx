import React from 'react';

// Image
import image from "../assets/iconfull.jpg";

// Icon
import { FaArrowRight } from "react-icons/fa6";

const Community = () => {
    return (
        <>
            
            <section>
                <div className="container">
                    <div className='mt-[100px] flex items-center flex-wrap justify-between'>
                        <div className='basis-[47%] flex items-center justify-center bg-white py-[50px]'>
                            <img src={image} alt="" />
                        </div>
                        <div className='basis-[47%] flex flex-col gap-[10px]'>
                            <h3 className='font-semibold text-[48px] relative before:content-[""] before:block before:w-[57px] before:h-[8px] before:rounded-[10px] before:bg-blue'>Your Community for Women Ready to Go Abroad</h3>
                            <p className='text-gray-dark '>We’re thrilled you found us! At Expat Global Girls, we empower women to pursue their dreams abroad. Our platform connects women seeking housemates for international moves and trips, offering a safe, supportive community and a searchable directory to help you find the perfect living companion. Join us to make your move abroad affordable, achievable, and filled with support!</p>
                            <button className='mt-[20px] flex items-center justify-center gap-2 bg-blue py-2 rounded-[10px] text-white max-w-fit px-[20px]'>
                                <p>Become a Member</p>
                                <span><FaArrowRight/></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Community;