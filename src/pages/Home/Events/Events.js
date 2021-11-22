import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEvent(data)
            })
    }, [])
    return (
        <div className="my-20">
        <div className="mx-10 grid grid-cols-3 gap-5 ">
            {event.map(items => <div className="bg-pink-100  pt-3 shadow-xl rounded-2xl relative" key={items._id}>
                        <img className="w-80 h-80 rounded-full mx-auto  opacity-70 relative transform duration-500 hover:scale-105 mb-5" src={items.image} alt="" />
                        <Link to={`/explore/${items._id}`}>
                        <button className="text-xl text-pink-800 border-2 px-5 py-3 mb-5 border-pink-800 rounded-lg hover:text-pink-100 hover:bg-pink-900">Book Now</button>
                        </Link>
                    <article className="absolute bottom-0 left-0 right-0 top-20 font-bold text-pink-900 bg-pink-50 bg-opacity-70 h-32 my-10">
                        <h3 className="text-3xl"> {items.title} </h3>
                        <h5 className="text-normal uppercase"> {items.facilities.slice(31, 45)} </h5>
                        <p className="text-normal uppercase"> {items.location} </p>
                   
                        </article>
                        
                </div>)}
            </div>
        </div>
    );
};

export default Events;