import React, { useState } from 'react';

// Image
import icon from "../assets/Icon.png";
import image1 from "../assets/Traveling1.jpg";
import image2 from "../assets/True-friends1.jpg";
import image3 from "../assets/World-bro1.png";


// Icon
import { FaArrowRight } from "react-icons/fa6";
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { MdErrorOutline } from "react-icons/md";



const HiroSection = () => {

    let [visiblePass, setVisiblePass] = useState(false)
    let [fName, setFName] = useState('')
    let [nameErr, setNameErr] = useState('')
    let [lName, setLName] = useState('')
    let [lNameErr, setLNameErr] = useState('')
    let [email, setEmail] = useState('')
    let [emailErr, setEmailErr] = useState('')
    let [passWord, setPassWord] = useState('')
    let [passWordErr, setPassWordErr] = useState('')

    // Password visibility
    let passwrdVisible = () => {
        setVisiblePass(!visiblePass)
    }

    let handleSignUp = (e) => {
        e.preventDefault();
        if (!fName) {
            setNameErr('Please Input Your First Name')
        }
        if (!lName) {
            setLNameErr('Please Input Your Last Name')
        }

        if (!email) {
            setEmailErr('Please Input Your Email')
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailErr('Please Input Valid Email Address')
            }
        }

        if (!passWord) {
            setPassWordErr('Please Input Password');
        } else if (!/(?=.*[a-z])/.test(passWord)) {
            setPassWordErr('Must contain at least one lowercase letter');
        } else if (!/(?=.*[A-Z])/.test(passWord)) {
            setPassWordErr('Must contain at least one uppercase letter');
        } else if (!/(?=.*[0-9])/.test(passWord)) {
            setPassWordErr('Must contain at least one number');
        } else if (!/(?=.*[!@#$%^&*])/.test(passWord)) {
            setPassWordErr('Must contain at least one special character');
        } else if (!/(?=.{8,})/.test(passWord)) {
            setPassWordErr('Must be at least 8 characters long');
        }
    }

    let handleFName = (e) => {
        setFName(e.target.value)
        setNameErr('')
    }
    let handleLName = (e) => {
        setLName(e.target.value)
        setLNameErr('')
    }
    let handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailErr('')
    }
    let handlePass = (e) => {
        setPassWord(e.target.value)
        setPassWordErr('')
    }


    return (
        <>

            <section>
                <div className="bg-HiroImage bg-no-repeat bg-cover pt-[20px] pb-[200px]">
                    <div className="container">
                        <nav className='backdrop-blur-3xl bg-white/20 p-[20px] h-[90px] flex items-center justify-between '>
                            <img src={icon} alt="" />
                            <button>
                                <h4 className='bg-white font-bold text-blue px-[20px] py-[5px] rounded-[10px] btnHover'>Log in</h4>
                            </button>
                        </nav>
                        <div className='flex flex-wrap justify-between mt-[100px] gap-y-[20px]'>
                            <div className='md:basis-[47%] flex flex-col gap-[20px]'>
                                <p className='text-[30px] md:text-[48px] text-black font-semibold'>The Premier Co-living Travel Network for Women</p>
                                <p className='flex gap-2 relative before:content-[""] before:block before:w-[38px] before:h-[3px] before:bg-white before:mt-3 text-black font-semibold'>Find your perfect housemate move faster, stay longer and travel with confidence</p>
                            </div>
                            <div className='md:basis-[47%] backdrop-blur-3xl py-[20px] md:px-[24px] px-[16px]'>
                                <h1 className='text-center text-white text-[24px] font-semibold'>Sign up with email</h1>
                                <form className='mt-[28px] flex flex-wrap justify-between gap-y-[20px] text-white'>
                                    <div className='basis-[100%] lg:basis-[45%] flex flex-col gap-1'>
                                        <label htmlFor="fname">First Name</label>
                                        <input onChange={handleFName} className='outline-none appearance-none  py-[5px] rounded-[10px] px-[10px] bg-white bg-opacity-[20px] text-black border-white border-[1px] placeholder-white borderHover' id='fname' type="text" placeholder='Enter your first name' />
                                        {nameErr &&
                                            <p className='flex items-center gap-1 text-red'><span className='text-red-500'><MdErrorOutline /></span> {nameErr}</p>
                                        }
                                    </div>
                                    <div className='basis-[100%] lg:basis-[45%] flex flex-col gap-1'>
                                        <label htmlFor="lname">Last Name</label>
                                        <input onChange={handleLName} className='outline-none appearance-none  py-[5px] rounded-[10px] px-[10px] bg-white bg-opacity-[20px] text-black border-white border-[1px] placeholder-white borderHover' type="text" placeholder='Enter your last name' id="lname" />
                                        {lNameErr &&
                                            <p className='flex items-center gap-1 text-red'><span className='text-red-500'><MdErrorOutline /></span> {lNameErr}</p>
                                        }
                                    </div>
                                    <div className='basis-[100%] flex flex-col gap-1'>
                                        <label htmlFor="email">Email Address</label>
                                        <input onChange={handleEmail} className='outline-none appearance-none  py-[5px] rounded-[10px] px-[10px] bg-white bg-opacity-0 text-black border-white border-[1px] placeholder-white borderHover' type="email" placeholder='Enter your email address' id="email" />
                                        {emailErr &&
                                            <p className='flex items-center gap-1 text-red'><span className='text-red-500'><MdErrorOutline /></span> {emailErr}</p>
                                        }
                                    </div>
                                    <div className='basis-[100%] flex flex-col gap-1'>
                                        <label htmlFor="pass">Password</label>
                                        <div className='flex items-center justify-between border-[1px] border-white borderHover  px-2 py-2 rounded-md'>
                                            <input onChange={handlePass} id='pass' className='outline-none flex-1 placeholder-white text-black bg-opacity-0 bg-white' placeholder='Input Your Password' type={visiblePass ? "text" : "password"} />
                                            <span onClick={passwrdVisible}>{visiblePass ? <IoEyeOutline /> : <IoEyeOffOutline />}</span>
                                        </div>
                                        {passWordErr &&
                                            <p className='flex items-center gap-1 text-red'><span className='text-red-500'><MdErrorOutline /></span>{passWordErr}</p>
                                        }
                                    </div>
                                    <p className='mx-auto'>You are already member <span className='border-b-2 border-white cursor-pointer'>log in</span></p>
                                    <button onClick={handleSignUp} className='basis-[100%] flex items-center justify-center gap-2 bg-blue py-2 rounded-[10px] btnHover'>
                                        <p>Sign Up</p>
                                        <span><FaArrowRight /></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-[-50px]">
                    <div className='flex flex-wrap justify-between bg-white p-[20px] w-[90%] md:w-[100%] lg:w-[90%] mx-auto rounded-t-[10px] gap-y-[10px]'>
                        <div className='basis-[100%] md:basis-[30%] lg:basis-[25%] bgHover px-[20px] py-[10px]'>
                            <img src={image1} alt="" />
                            <div>
                                <h2 className='font-semibold text-[24px]'>150+ Countries</h2>
                                <p className='text-gray-dark'>Empowering women to explore destinations globally.</p>
                            </div>
                        </div>
                        <div className='basis-[100%] md:basis-[30%] lg:basis-[25%] bgHover px-[20px] py-[10px]'>
                            <img src={image2} alt="" />
                            <div>
                                <h2 className='font-semibold text-[24px]'>Connect & Travel</h2>
                                <p className='text-gray-dark'>A trusted community of verified members.</p>
                            </div>
                        </div>
                        <div className='basis-[100%] md:basis-[30%] lg:basis-[25%] bgHover px-[20px] py-[10px]'>
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