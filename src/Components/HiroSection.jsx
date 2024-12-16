import React from 'react';

// Image
import icon from "../assets/Icon.png";
import image1 from "../assets/Traveling1.jpg";
import image2 from "../assets/True-friends1.jpg";
import image3 from "../assets/World-bro1.png";


// Icon
import { FaArrowRight } from "react-icons/fa6";



const HiroSection = () => {
    return (
        <>

            <section>
                <div className="bg-HiroImage bg-no-repeat bg-cover pt-[20px] pb-[200px]">
                    <div className="container">
                        <nav className='backdrop-blur-3xl bg-white/20 p-[20px] h-[90px] flex items-center justify-between '>
                            <img src={icon} alt="" />
                            <button>
                                <h4 className='bg-white font-bold text-blue px-[20px] py-[5px] rounded-[10px]'>Log in</h4>
                            </button>
                        </nav>
                        <div className='flex flex-wrap justify-between mt-[100px] gap-y-[20px]'>
                            <div className='md:basis-[47%] flex flex-col gap-[20px]'>
                                <p className='text-[30px] md:text-[48px] text-white font-semibold'>The Premier Co-living Travel Network for Women</p>
                                <p className='flex relative before:content-[""] before:block before:w-[38px] before:h-[3px] before:bg-white text-white font-semibold'>Find your perfect housemate move faster, stay longer and travel with confidence</p>
                            </div>
                            <div className='md:basis-[47%] backdrop-blur-3xl py-[20px] md:px-[24px] px-[16px]'>
                                <h1 className='text-center text-white text-[24px] font-semibold'>Sign up with email</h1>
                                <form className='mt-[28px] flex flex-wrap justify-between gap-y-[20px] text-white'>
                                    <div className='basis-[100%] lg:basis-[45%] flex flex-col gap-1'>
                                        <label htmlFor="fname">First Name</label>
                                        <input className='outline-none appearance-none  py-[5px] rounded-[10px] px-[10px] bg-white bg-opacity-[20px] text-black border-white border-[1px] placeholder-white' id='fname' type="text" placeholder='Enter your first name' />
                                    </div>
                                    <div className='basis-[100%] lg:basis-[45%] flex flex-col gap-1'>
                                        <label htmlFor="lname">Last Name</label>
                                        <input className='outline-none appearance-none  py-[5px] rounded-[10px] px-[10px] bg-white bg-opacity-[20px] text-black border-white border-[1px] placeholder-white'  type="text" placeholder='Enter your last name' id="lname" />
                                    </div>
                                    <div className='basis-[100%] flex flex-col gap-1'>
                                        <label htmlFor="email">Email Address</label>
                                        <input className='outline-none appearance-none  py-[5px] rounded-[10px] px-[10px] bg-white bg-opacity-[20px] text-black border-white border-[1px] placeholder-white'  type="text" placeholder='Enter your email address' id="email" />
                                    </div>
                                    <div className='basis-[100%] flex flex-col gap-1'>
                                        <label htmlFor="pass">Password</label>
                                        <input className='outline-none appearance-none  py-[5px] rounded-[10px] px-[10px] bg-white bg-opacity-[20px] text-black border-white border-[1px] placeholder-white'  type="password" placeholder='Enter your password' id="pass" />
                                    </div>
                                    <p className='mx-auto'>You are already member <span className='border-b-2 border-white'>log in</span></p>
                                    <button className='basis-[100%] flex items-center justify-center gap-2 bg-blue py-2 rounded-[10px]'>
                                        <p>Sign Up</p>
                                        <span><FaArrowRight/></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-[-50px]">
                    <div className='flex flex-wrap justify-between bg-white p-[20px] w-[90%] md:w-[100%] lg:w-[90%] mx-auto rounded-t-[10px] gap-y-[10px]'>
                        <div className='md:basis-[25%]'>
                            <img src={image1} alt="" />
                            <div>
                                <h2 className='font-semibold text-[24px]'>150+ Countries</h2>
                                <p className='text-gray-dark'>Empowering women to explore destinations globally.</p>
                            </div>
                        </div>
                        <div className='md:basis-[25%]'>
                            <img src={image2} alt="" />
                            <div>
                                <h2 className='font-semibold text-[24px]'>Connect & Travel</h2>
                                <p className='text-gray-dark'>A trusted community of verified members.</p>
                            </div>
                        </div>
                        <div className='md:basis-[25%]'>
                            <img src={image3} alt="" />
                            <div>
                                <h2 className='font-semibold text-[24px]'>Find Your Tribe</h2>
                                <p className='text-gray-dark'>Find like-minded housemates faster and easier.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HiroSection;