import React from 'react';

// Image
import image from "../assets/Icon.png";
import image1 from "../assets/twitter.png";
import image2 from "../assets/instagram.png";
import image3 from "../assets/linkedin.png";
import image4 from "../assets/facebook.png"

const Footer = () => {
    return (
        <>

            <footer className='bg-white py-[50px] mt-[100px]'>
                <div className="container ">
                    <div className='flex flex-wrap justify-between items-center border-b-2 border-gray-light pb-[30px] gap-y-[20px]'>
                        <div className='md:basis-[40%] flex flex-col gap-[20px]'>
                            <div>
                                <img src={image} alt="" />
                            </div>
                            <p className='text-gray-dark'>Scan a Turning Hearts Medallion to learn about and interact with those who have passed on. You can also begin documenting the legacy you wish to leave behind.</p>
                            <div>
                                <p className='font-semibold'>Social Media:</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <img className='cursor-pointer' src={image1} alt="" />
                                    <img className='cursor-pointer' src={image2} alt="" />
                                    <img className='cursor-pointer' src={image3} alt="" />
                                    <img className='cursor-pointer' src={image4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='md:basis-[20%]'>
                            <h2 className='font-semibold text-[20px]'>Quick Link</h2>
                            <ul className='flex flex-col gap-2 text-gray-dark mt-[20px]'>
                                <li className='borderBottomHover'>Home</li>
                                <li className='borderBottomHover'>Faq</li>
                                <li className='borderBottomHover'>Country search</li>
                                <li className='borderBottomHover'>Register</li>
                            </ul>
                        </div>
                        <div className='md:basis-[30%] text-gray-dark flex flex-col gap-2'>
                            <p>(316) 555-0116</p>
                            <p className='borderBottomHover'>deanna.curtis@example.com</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray text-end pt-[20px]'>© [2024] Ash and Fire. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;