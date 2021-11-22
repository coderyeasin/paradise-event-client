import React from 'react';
import { FaBeer, FaUmbrellaBeach} from 'react-icons/fa';

const Features = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
                <div className=" bg-pink-700 space-y-5">
                    <h3 className="text-gray-50 text-xl py-3">Event Planning</h3>
                    <FaUmbrellaBeach className="text-9xl pb-3 mx-auto text-gray-50 transform hover:scale-105 duration-500" />
                </div>
                <div className=" bg-pink-800 space-y-5">
                <h3 className="text-gray-50 text-xl py-3">Pre-Wedding</h3>
                    <FaBeer className="text-9xl pb-3 mx-auto text-gray-50 transform hover:scale-105 duration-500" />
                </div>
                <div className=" bg-pink-900 space-y-5">
                <h3 className="text-gray-50 text-xl py-3">Wedding</h3>
                    <FaUmbrellaBeach className="text-9xl pb-3 mx-auto text-gray-50 sm:flex-shrink-0 transform hover:scale-105 duration-500" />
                </div>
                <div className=" bg-pink-700 space-y-5">
                <h3 className="text-gray-50 text-xl py-3">Reception</h3>
                    <FaBeer className="text-9xl pb-3 mx-auto text-gray-50 transform hover:scale-105 duration-500" />
                </div>
                <div className=" bg-pink-800 space-y-5">
                <h3 className="text-gray-50 text-xl py-3">Post-Wedding</h3>
                    <FaUmbrellaBeach className="text-9xl pb-3 mx-auto text-gray-50 transform hover:scale-105 duration-500" />
                </div>
                <div className=" bg-pink-900 space-y-5">
                <h3 className="text-gray-50 text-xl py-3">Combo Events</h3>
                    <FaBeer className="text-9xl pb-3 mx-auto text-gray-50 transform hover:scale-105 duration-500" />
                </div>
            </div>
        </div>
    );
};

export default Features;