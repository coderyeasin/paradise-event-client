import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';


const Forms = () => {

    const { users } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        // axios.post('http://localhost:5000/events', data)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             alert('added successfully');
        //             reset()
        //         }
        //     console.log(res);
        // })
    };

    
    return (
        <div>
            
        <form className="bg-pink-50 space-y-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
        <input className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
            placeholder="Event Title"
            {...register("title", { required: true, maxLength: 100 })} />
        
        <input placeholder="Event Facilities"
            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
            {...register("facilities", { required: true })} />
        
        <input placeholder="Location"
            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
            {...register("location", { required: true, maxLength: 20 })} />
        
        <input placeholder="Image Link"
            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
            {...register("image", { required: true })} />
        
        {/* <input placeholder="need implement" type="file"
            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
            {...register("image", { required: true, maxLength: 20 })} />
         */}
        <select style={{color:'purple'}} placeholder="Event Type"
            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
            {...register("type")}>
            
            <option className="text-purple-500" value="single event">Single Event</option>
            <option value="full event">Full Event</option>
            <option value="mega event">Mega Event</option>
        </select>

        <input placeholder="Price"
            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600" type="tel" {...register("price")} />
        
        <textarea placeholder="Description"
            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
            {...register("description")} />


        <input placeholder=""
            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4 bg-pink-800 text-xl text-white transform duration-500 hover:scale-95"
            type="submit" value="Add Events" />
        
    </form>
        </div>
    );
};

export default Forms;