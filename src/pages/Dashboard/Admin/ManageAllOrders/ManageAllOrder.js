import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
// import { useForm } from "react-hook-form";

const ManageAllOrder = () => {

    const {users} = useAuth()
    const [order, setOrders] = useState([])
    const [status, setStatus] = useState("")
    // const [orders, setOrders] = useState([])

    useEffect(() => {
        
        const url = `http://localhost:5000/allOrders`
        fetch(url)
            .then(res => res.json())
        .then(data => setOrders(data))
    }, [users?.email])

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     setStatus(data)
    // };
     
    const handleStatus = e => {
        setStatus(e.target.value)
    }

    console.log(status);

    const handleUpdate = id => {
    
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({status})
        })
        console.log(id);
}

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
                            <td className="border-r-2 border-pink-900" >{event.description.slice(0,20)}...</td>
                            <td className=""  >                          
                            
                            
                                <input onChange={handleStatus} defaultValue={event.status}
                                    className="text-pink-800 w-2/4" type="text" />
                               
                                                        
                            </td>
                            <td >
                            <button onClick={() => handleUpdate(event._id)} className="text-gray-500 bg-red-200">Update</button>
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