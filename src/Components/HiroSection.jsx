import React from 'react';

// Image
import icon from "../assets/Icon.png";
import image1 from "../assets/Traveling1.jpg";
import image2 from "../assets/True-friends1.jpg";
import image3 from "../assets/World-bro1.png";


const HiroSection = () => {
    return (
        <>

            <section>
                <div className="bg-HiroImage bg-no-repeat bg-cover h-[100vh]">
                    <div className="container">
                        <nav className='backdrop-blur-3xl bg-white/20 p-[20px] h-[90px] flex items-center justify-between '>
                            <img src={icon} alt="" />
                            <button>
                                <h4 className='bg-white font-bold text-blue px-[20px] py-[5px] rounded-[10px]'>Log in</h4>
                            </button>
                        </nav>
                        <div className='flex flex-wrap justify-between mt-[100px]'>
                            <div className='basis-[47%] flex flex-col gap-[20px]'>
                                <p className='text-[48px] text-white font-semibold'>The Premier Co-living Travel Network for Women</p>
                                <p className='flex relative before:content-[""] before:block before:w-[38px] before:h-[3px] before:bg-white text-white font-semibold'>Find your perfect housemate move faster, stay longer and travel with confidence</p>
                            </div>
                            <div className='basis-[47%] backdrop-blur-3xl py-[20px] px-[24px]'>
                                <h1 className='text-center text-white text-[24px] font-semibold'>Sign up with email</h1>
                                <form className='mt-[28px] flex flex-wrap gap-y-[20px] text-white'>
                                    <div className='basis-[45%]'>
                                        <label htmlFor="fname">First Name</label>
                                        <input className='outline-none appearance-none  py-[5px] rounded-[10px] px-[10px] bg-white bg-opacity-[20px] text-white border-white border-[2px] placeholder-white' id='fname' type="text" placeholder='Enter your first name' />
                                    </div>
                                    <div className='basis-[45%]'>
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" placeholder='Enter your last name' id="lname" />
                                    </div>
                                    <div className='basis-[100%]'>
                                        <label htmlFor="email">Email Address</label>
                                        <input type="text" placeholder='Enter your email address' id="email" />
                                    </div>
                                    <div className='basis-[100%]'>
                                        <label htmlFor="pass">Password</label>
                                        <input type="text" placeholder='Enter your password' id="pass" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <div>
                            <img src={image1} alt="" />
                            <div>
                                <h2>150+ Countries</h2>
                                <p>Empowering women to explore destinations globally.</p>
                            </div>
                        </div>
                        <div>
                            <img src={image2} alt="" />
                            <div>
                                <h2>Connect & Travel</h2>
                                <p>A trusted community of verified members.</p>
                            </div>
                        </div>
                        <div>
                            <img src={image3} alt="" />
                            <div>
                                <h2>Find Your Tribe</h2>
                                <p>Find like-minded housemates faster and easier.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HiroSection;