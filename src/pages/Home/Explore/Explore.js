import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'





const Explore = () => {

const { id } = useParams(); 
 const [event, setEvent] = useState([])
  const {users} = useAuth()
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEvent(data)
            })
    }, [])
    const uniqueBook = event.find(e => e._id === id) //find must

////////////order form
const { register, handleSubmit, reset } = useForm();
const onSubmit = data => {
    data.status = "pending"; //set intial value

    axios.post('http://localhost:5000/booking', data)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire(
                    `Congrats! Mr.${users?.displayName}`,
                    'Received your Booking',
                    'success'
                )
                reset()
             navigate('/dashboard')
            }
        console.log(res);
    })
};

 
    

    return (
        <div>
            <div className="bg-pink-100 grid grid-cols-2 w-3/4 mx-auto items-center  pt-3 shadow-xl rounded-2xl px-20 my-20" >
                        <img className="w-80 h-80 rounded-lg mx-auto transform duration-500 hover:scale-105 mb-5" src={uniqueBook?.image} alt="" />                     
                <div>

                    {/* <Forms /> */}

                    <form className="bg-pink-50 bg-opacity-70 py-10 my-10 rounded-lg" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={uniqueBook?.title}
                            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
                    {...register("title", { required: true })} />
                
                <input defaultValue={users?.email}
                    className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
                    {...register("email" )} />
                
                <input defaultValue={uniqueBook?.price} 
                    className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
                    {...register("price" )} />
                
                    <input placeholder="Phone"
                    type="tel"
                    className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
                    {...register("phone", { required: true, maxLength: 120 })} />
                
                    <input placeholder="Date"
                    type="date"
                    className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
                    {...register("date", { required: true, maxLength: 120 })} />
                
                <textarea placeholder="Type your events purpose"
                    className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
                    {...register("description", { required: true, maxLength: 120 })} />
                
                        <input
                            className=" rounded-full cursor-pointer w-2/4 my-5 bg-transparent outline-none border-b-2 py-2 px-4 bg-pink-800 text-xl text-white transform duration-500 hover:scale-95"
                            type="submit" value="Order" />
                    </form>

                    
                    <article className=" font-bold text-pink-900 text-justify bg-pink-50 bg-opacity-70 py-20 my-20 rounded-lg px-10">
                        <button
                            className="text-xl text-pink-800 border-2 px-5 py-3 mb-5 border-pink-800 rounded-lg hover:text-pink-100 hover:bg-pink-900">
                            Order Now</button>
                           

                        <h3 className="text-3xl pt-12"> {uniqueBook?.title} </h3>
                       
                        <p>Location: {uniqueBook?.location} </p>
                        <h5 className="text-normal uppercase"> Cost: ${uniqueBook?.price} / Wedding Events </h5>
                        <p>Event Type: {uniqueBook?.type} </p>
                        <h3>Details:</h3>
                         <p className="text-normal uppercase  mb-5"> {uniqueBook?.description} </p>
                         <p>Facilities: {uniqueBook?.facilities} </p>
                 </article>
                       </div>
                </div>
        </div>
    );
};

export default Explore;