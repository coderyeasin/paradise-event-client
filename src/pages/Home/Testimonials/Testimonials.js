import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
// import { Link } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';

const Testimonials = () => {

    // const{users} = useAuth()
    const[review, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    
    const rating = review.filter(user => user?.star && user?.feedback)

    return (
        <div className="my-20">
            <h3 className="text-3xl uppercase text-center font-bold my-10">Testimonials</h3>
               <div className="mx-10 md:grid grid-cols-3 gap-5 ">
                {
                    rating.map(event => <div className="bg-pink-800 pb-5 mb-5  pt-3 shadow-xl rounded-2xl" key={event._id}>
                        <article className="bottom-0 left-0 right-0 top-20 font-bold text-pink-900 bg-pink-50 bg-opacity-70 md:h-44 md:my-10 px-10">
                            <Rating readonly
                                initialRating={event?.star}
                                emptySymbol="far fa-star fa-2x"
                                fullSymbol="fas fa-star fa-2x"
                                className="my-3"
                        />
                        <h3 className="text-xl"> {event?.name} </h3>
                        <p className="capitalize"> {event.feedback} </p>
                   
                        </article>
                        
                </div>)
                }
            </div>
        </div>
    );
};

export default Testimonials;