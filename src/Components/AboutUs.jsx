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
                    <div>
                        <div>
                            <h2>Why Choose Expat Global Girls</h2>
                            <p>Empowering women to travel with confidence and ease worldwide</p>
                        </div>
                        <div>
                            <div>
                                <img src={Image} alt="" />
                                <div>
                                    <h2>Affordable Housing</h2>
                                    <p>Save money and travel smarter by sharing accommodations with fellow members.</p>
                                </div>
                            </div>
                            <div>
                                <img src={Image1} alt="" />
                                <div>
                                    <h2>Flexible Options</h2>
                                    <p>From memberships to travel & lifestyle preferences-you have the power to choose.</p>
                                </div>
                            </div>
                            <div>
                                <img src={Image2} alt="" />
                                <div>
                                    <h2>Verified Profiles</h2>
                                    <p>A reliable community with verified profiles for added safety and peace of mind.</p>
                                </div>
                            </div>
                            <div>
                                <img src={Image3} alt="" />
                                <div>
                                    <h2>Women-Only Spaces</h2>
                                    <p>Safe, supportive spaces for women to connect and thrive period.</p>
                                </div>
                            </div>
                            <div>
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