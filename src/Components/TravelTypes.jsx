import React from 'react';

// Image
import Image from "../assets/typetravel.png";

const TravelTypes = () => {
    return (
        <>

            <section>
                <div className="container">
                    <div className='mt-[100px] flex flex-col gap-[20px] items-center bg-white py-[20px]'>
                        <span className='w-[57px] h-[8px] bg-blue rounded-[10px] mb-[-30px]'></span>
                        <h1 className='text-[48px] font-semibold'>Perfect for every type of traveler</h1>
                        <img src={Image} alt="" />
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default TravelTypes;