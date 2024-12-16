import React from 'react';

// Image
import Image from "../assets/Frame.png"
import Image1 from "../assets/Vector.png"
import Image2 from "../assets/Group.png"
import Image3 from "../assets/Frame1.png"
import icon from "../assets/Icon.png"


const AboutUs = () => {
    return (
        <>
            
            <section>
                <div className="container">
                    <div className='mt-[100px] flex flex-col gap-[30px]'>
                        <div className='flex flex-col items-center justify-center gap-[5px] relative'>
                            <h2 className='md:text-[48px] font-semibold'>Why Choose Expat Global Girls</h2>
                            <p className='text-gray-dark'>Empowering women to travel with confidence and ease worldwide</p>
                            <p className='absolute bg-gray px-[10px] py-[5px] rounded-[10px] top-[-30px] -rotate-12 text-[12px]'>Why Choose us?</p>
                        </div>
                        <div className='flex flex-wrap relative justify-between gap-y-[40px]'>
                            <div className='md:basis-[45%] border-[1px] border-gray-dark px-[70px] py-[20px] rounded-br-[100px] rounded-[10px]'>
                                <img src={Image} alt="" />
                                <div className='mt-[10px]'>
                                    <h2 className='text-[24px] font-semibold'>Affordable Housing</h2>
                                    <p className='text-gray-dark'>Save money and travel smarter by sharing accommodations with fellow members.</p>
                                </div>
                            </div>
                            <div className='md:basis-[45%] border-[1px] border-gray-dark px-[70px] py-[20px] rounded-bl-[100px] rounded-[10px]'>
                                <img src={Image1} alt="" />
                                <div className='mt-[10px]'>
                                    <h2 className='text-[24px] font-semibold'>Flexible Options</h2>
                                    <p className='text-gray-dark'>From memberships to travel & lifestyle preferences-you have the power to choose.</p>
                                </div>
                            </div>
                            <div className='md:basis-[45%] border-[1px] border-gray-dark px-[70px] py-[20px] rounded-tr-[100px] rounded-[10px]'>
                                <img src={Image2} alt="" />
                                <div className='mt-[10px]'>
                                    <h2 className='text-[24px] font-semibold'>Verified Profiles</h2>
                                    <p className='text-gray-dark'>A reliable community with verified profiles for added safety and peace of mind.</p>
                                </div>
                            </div>
                            <div className='md:basis-[45%] border-[1px] border-gray-dark px-[70px] py-[20px] rounded-tl-[100px] rounded-[10px]'>
                                <img src={Image3} alt="" />
                                <div className='mt-[10px]'>
                                    <h2 className='text-[24px] font-semibold'>Women-Only Spaces</h2>
                                    <p className='text-gray-dark'>Safe, supportive spaces for women to connect and thrive period.</p>
                                </div>
                            </div>
                            <div className='hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutUs;