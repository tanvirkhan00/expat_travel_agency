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
                                    <img src={image1} alt="" />
                                    <img src={image2} alt="" />
                                    <img src={image3} alt="" />
                                    <img src={image4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='md:basis-[20%]'>
                            <h2 className='font-semibold text-[20px]'>Quick Link</h2>
                            <ul className='flex flex-col gap-2 text-gray-dark mt-[20px]'>
                                <li className='border-b-2 border-transparet border-black max-w-fit'>Home</li>
                                <li className='border-b-2 border-b-green border-black max-w-fit'>Faq</li>
                                <li className='border-b-2 border-b-green border-black max-w-fit'>Country search</li>
                                <li className='border-b-2 border-b-green border-black max-w-fit'>Register</li>
                            </ul>
                        </div>
                        <div className='md:basis-[30%] text-gray-dark flex flex-col gap-2'>
                            <p>(316) 555-0116</p>
                            <p>deanna.curtis@example.com</p>
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