import React from 'react';

// Icons
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";


const Faq = () => {
    return (
        <>

            <section>
                <div className="container mt-[100px]">
                    <div>
                        <div className='text-center'>
                            <h1 className='text-[48px] font-semibold'>FAQs</h1>
                            <p className='text-gray-dark'>If you have any questions that aren't listed below, please send your question to : <span className='border-b-[1px] border-gray-dark'>info@ExpatGlobalGirls.com</span></p>
                        </div>
                        <div className='mt-[50px] flex flex-col gap-[10px]'>
                            <div className='bg-white p-[20px] relative rounded-[10px] bgHover'>
                                <h2 className='font-semibold text-[20px]'>What cars do you have in your inventory?</h2>
                                <p className='w-[70%] text-gray-dark'>Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris. </p>
                                <span className='absolute top-5 right-5'><CiCircleMinus/></span>
                            </div>
                            <div className='bg-white flex items-center justify-between p-[20px] rounded-[10px] bgHover'>
                                <h2 className='font-semibold text-[20px]'>What cars do you have in your inventory ?</h2>
                                <span className='font-semibold'><CiCirclePlus/></span>
                            </div>
                            <div className='bg-white flex items-center justify-between p-[20px] rounded-[10px] bgHover'>
                                <h2 className='font-semibold text-[20px]'>What cars do you have in your inventory ?</h2>
                                <span className='font-semibold'><CiCirclePlus/></span>
                            </div>
                            <div className='bg-white flex items-center justify-between p-[20px] rounded-[10px] bgHover'>
                                <h2 className='font-semibold text-[20px]'>What cars do you have in your inventory ?</h2>
                                <span className='font-semibold'><CiCirclePlus/></span>
                            </div>
                            <div className='bg-white flex items-center justify-between p-[20px] rounded-[10px] bgHover'>
                                <h2 className='font-semibold text-[20px]'>What cars do you have in your inventory ?</h2>
                                <span className='font-semibold'><CiCirclePlus/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default Faq;