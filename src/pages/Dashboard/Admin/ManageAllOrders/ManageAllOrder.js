import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from "react-hook-form";

const ManageAllOrder = () => {

    const {users} = useAuth()
    const [order, setOrders] = useState([])
    // const [orders, setOrders] = useState([])

    useEffect(() => {
        
        const url = `http://localhost:5000/allOrders`
        fetch(url)
            .then(res => res.json())
        .then(data => setOrders(data))
    }, [users?.email])

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
            <h3 className="text-xl my-3 font-bold">Orders : {order.length} </h3>
            <table className="table-auto w-full" >
                        <thead>
                            <tr className="bg-pink-700 border-2 border-pink-900">
                            <th>Date</th>
                            {/* <th>Name</th> */}
                            <th>Title</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                {
                    
                    order.map(event => <tbody key={event._id}>
                      
                            <tr className="bg-pink-700 border-2 border-pink-900 text-yellow-100">
                            <td className="border-r-2 border-pink-900">{event.date}</td>
                            {/* <td className="border-r-2 border-pink-900">{users.displayName}</td> */}
                            <td className="border-r-2 border-pink-900">{event.title}</td>
                            <td className="border-r-2 border-pink-900">{event.email}</td>
                            <td className="border-r-2 border-pink-900">{event.phone}</td>
                            <td className="border-r-2 border-pink-900" >{event.description}</td>
                            <td className="border-r-2 border-pink-900" >{event.status}</td>
                            <td  >                          
                            
                                <form onSubmit={handleSubmit(onSubmit)}>

                                <select style={{color:'purple'}} placeholder="Event Type"
                            className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-pink-600"
                            {...register("status")}>
                            
                                        <option className="text-purple-500" value={event.status}>{event.status}</option>
                            <option value="full event">Full Event</option>
                            <option value="mega event">Mega Event</option>
                        </select>
                                    
                                    <input placeholder=""
                            className="w-2/4 cursor-pointer text-pink-800 transform duration-500 hover:scale-95"
                            type="submit" value="update" />
                        
                            </form>
                            
                            </td>
                            <td >
                            <button className="text-yellow-50">X</button>
                            </td>
                            </tr>                      
                        </tbody>
                       
                        
)
                }
 </table>
        </div>
    );
};

export default ManageAllOrder;