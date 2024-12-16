import React from 'react';

// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Icon
import { FaStar } from "react-icons/fa6";

// Image
import image from "../assets/testimonial.png"


const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 9000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };


    return (
        <>

            <section>
                <div className="container mt-[100px]">
                    <div>
                        <div className='flex flex-col items-center justify-center gap-[5px] relative'>
                            <h2 className='text-[48px] font-semibold'>What Our Member Say</h2>
                            <p className='text-gray-dark'>Hear from women who share your passion for exploring new cultures, experiencing life abroad, and making the most of every opportunity.</p>
                            <p className='absolute bg-gray px-[10px] py-[5px] rounded-[10px] top-[-30px] -rotate-12 text-[12px]'>Testimonial</p>
                        </div>

                        <div className="slider-container">
                            <Slider {...settings}>
                                <div>
                                    <div className='mt-[50px] flex justify-between flex-wrap items-center bg-white w-[90%]'>
                                        <div className='basis-[100%] md:basis-[45%] bg-blue px-[50px] py-[30px] md:rounded-[10px]'>
                                            <div className='flex justify-between items-start'>
                                                <img src={image} alt="" />
                                                <div className='flex gap-2 items-center text-white'>
                                                    <span><FaStar /></span>
                                                    <p>5.0</p>
                                                </div>
                                            </div>
                                            <div className='text-white'>
                                                <h2 className='text-[24px] font-semibold'>Sarah Thompson</h2>
                                                <p className='text-gray-light'>Teacher •  Non - smoker • Married</p>
                                                <p className='text-gray-light'>Silom, Bangkok</p>
                                                <p className='text-gray-light'>Dec  3-8</p>
                                            </div>
                                        </div>
                                        <div className='md:basis-[40%] text-gray-dark'>
                                            <p>Our smart developers build innovative, efficient, and high- performance solutions. efficient, and high- performance solutions. efficient, and high- performance solutions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-[50px] flex justify-between flex-wrap items-center bg-white w-[90%]'>
                                        <div className='basis-[100%] md:basis-[45%] bg-blue px-[50px] py-[30px] md:rounded-[10px]'>
                                            <div className='flex justify-between items-start'>
                                                <img src={image} alt="" />
                                                <div className='flex gap-2 items-center text-white'>
                                                    <span><FaStar /></span>
                                                    <p>5.0</p>
                                                </div>
                                            </div>
                                            <div className='text-white'>
                                                <h2 className='text-[24px] font-semibold'>Sarah Thompson</h2>
                                                <p className='text-gray-light'>Teacher •  Non - smoker • Married</p>
                                                <p className='text-gray-light'>Silom, Bangkok</p>
                                                <p className='text-gray-light'>Dec  3-8</p>
                                            </div>
                                        </div>
                                        <div className='md:basis-[40%] text-gray-dark'>
                                            <p>Our smart developers build innovative, efficient, and high- performance solutions. efficient, and high- performance solutions. efficient, and high- performance solutions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-[50px] flex justify-between flex-wrap items-center bg-white w-[90%]'>
                                        <div className='basis-[100%] md:basis-[45%] bg-blue px-[50px] py-[30px] md:rounded-[10px]'>
                                            <div className='flex justify-between items-start'>
                                                <img src={image} alt="" />
                                                <div className='flex gap-2 items-center text-white'>
                                                    <span><FaStar /></span>
                                                    <p>5.0</p>
                                                </div>
                                            </div>
                                            <div className='text-white'>
                                                <h2 className='text-[24px] font-semibold'>Sarah Thompson</h2>
                                                <p className='text-gray-light'>Teacher •  Non - smoker • Married</p>
                                                <p className='text-gray-light'>Silom, Bangkok</p>
                                                <p className='text-gray-light'>Dec  3-8</p>
                                            </div>
                                        </div>
                                        <div className='md:basis-[40%] text-gray-dark'>
                                            <p>Our smart developers build innovative, efficient, and high- performance solutions. efficient, and high- performance solutions. efficient, and high- performance solutions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-[50px] flex justify-between flex-wrap items-center bg-white w-[90%]'>
                                        <div className='basis-[100%] md:basis-[45%] bg-blue px-[50px] py-[30px] md:rounded-[10px]'>
                                            <div className='flex justify-between items-start'>
                                                <img src={image} alt="" />
                                                <div className='flex gap-2 items-center text-white'>
                                                    <span><FaStar /></span>
                                                    <p>5.0</p>
                                                </div>
                                            </div>
                                            <div className='text-white'>
                                                <h2 className='text-[24px] font-semibold'>Sarah Thompson</h2>
                                                <p className='text-gray-light'>Teacher •  Non - smoker • Married</p>
                                                <p className='text-gray-light'>Silom, Bangkok</p>
                                                <p className='text-gray-light'>Dec  3-8</p>
                                            </div>
                                        </div>
                                        <div className='md:basis-[40%] text-gray-dark'>
                                            <p>Our smart developers build innovative, efficient, and high- performance solutions. efficient, and high- performance solutions. efficient, and high- performance solutions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-[50px] flex justify-between flex-wrap items-center bg-white w-[90%]'>
                                        <div className='basis-[100%] md:basis-[45%] bg-blue px-[50px] py-[30px] md:rounded-[10px]'>
                                            <div className='flex justify-between items-start'>
                                                <img src={image} alt="" />
                                                <div className='flex gap-2 items-center text-white'>
                                                    <span><FaStar /></span>
                                                    <p>5.0</p>
                                                </div>
                                            </div>
                                            <div className='text-white'>
                                                <h2 className='text-[24px] font-semibold'>Sarah Thompson</h2>
                                                <p className='text-gray-light'>Teacher •  Non - smoker • Married</p>
                                                <p className='text-gray-light'>Silom, Bangkok</p>
                                                <p className='text-gray-light'>Dec  3-8</p>
                                            </div>
                                        </div>
                                        <div className='md:basis-[40%] text-gray-dark'>
                                            <p>Our smart developers build innovative, efficient, and high- performance solutions. efficient, and high- performance solutions. efficient, and high- performance solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Testimonial;