import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import event from '../../../images/event.jpg'

const Services = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    
    const eventItem = events.slice(-7,-1)
    console.log(eventItem);
    
    return (
        <div>
            <h3 className="text-4xl uppercase my-16 font-semibold">Services</h3>
            
            <div className="mx-10 md:grid grid-cols-3 md:space-y-0 space-y-20 gap-5 ">
                {
                    eventItem.map(event => <div className="bg-pink-800  pt-3 shadow-xl rounded-2xl relative" key={event._id}>
                        <img className="w-80 h-80 rounded-full mx-auto  opacity-70 relative transform duration-500 hover:scale-105 mb-5" src={event.image} alt="" />
                        <Link to={`/explore/${event._id}`}>
                        <button className="text-xl text-white border-2 px-5 py-3 mb-5 border-white rounded-lg hover:text-pink-100 hover:bg-pink-900">Book Now</button>
                        </Link>
                    <article className="absolute bottom-0 left-0 right-0 top-20 font-bold text-pink-900 bg-pink-50 bg-opacity-70 h-32 my-10">
                        <h3 className="text-3xl"> {event.title} </h3>
                        <h5 className="text-normal uppercase"> {event.facilities.slice(31, 45)} </h5>
                        <p className="text-normal uppercase"> {event.location} </p>
                   
                        </article>
                        
                </div>)
                }
            </div>

       </div>
    );
};

export default Services;