import React from 'react';
import plan from '../../../images/event.jpg'


const Planning = () => {
    return (
        <div className=" bg-pink-900">
            <div className="flex items-center content-center sm:items-center md:flex md:justify-around md:items-center lg:flex lg:justify-around lg:items-center ">
                <div className="md:w-2/4 lg:w-2/4">
                    <img className="md:p-20 lg:p-20 transform hover:scale-105 duration-500" src={plan} alt="" />
                </div>
                <div className="space-y-5 md:w-2/4 lg:w-2/4 text-white md:mr-20 lg:mr-20 pr-10">
                    <h3 className="text-3xl">Planning & Design</h3>
                    
                        <h4 className="md:text-4xl lg:text-4xl">A David Tutera event is more than an event – it is an interactive experience about who you are.</h4>
                        <p className="text-justify md:text-xl lg:text-xl">
                        The David Tutera team is a leader in the event industry for over 30 years internationally. Our specialty is creating one-of-a-kind celebrations that truly represent the honoree(s). It is through the details in every aspect of an event; from fine stationery, flowers, visual design, production, entertainment, lighting, to overall execution that an event can be the perfect medium to tell your celebration story. David believes in the power of storytelling and aims to evoke emotion and memories for not only his clients but all of their guests as well.
                        </p>
              
                </div>
            </div>
        </div>
    );
};

export default Planning;