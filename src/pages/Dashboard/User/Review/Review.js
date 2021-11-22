import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import Swal from 'sweetalert2'

const Review = () => {

    const {users} = useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        `Thank You! Mr.${users?.displayName}`,
                        'Every feedbacks to give power us',
                        'success'
                    )
                    reset()
                }
            console.log(res);
        })
    };
   

    return (
        <div>
            <h3 className="text-xl text-pink-700 font-bold">Please give your valuable feedback</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" defaultValue={users?.displayName}
                    className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
                    {...register("name", { required: true, maxLength: 20 })} />
                
                <input placeholder="Give a number out of 5"
                            className="w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
                            {...register("star", { required: true })} />
                        

                <textarea
                    className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
                    type="email" placeholder="Give us your feedback"
                    {...register("feedback",
                        )} />
                
                <input
                    className=" cursor-pointer block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 bg-pink-900 text-gray-100"
                    type="submit" value="Post Your Feedback" />
            </form>
        </div>
    );
};

export default Review;