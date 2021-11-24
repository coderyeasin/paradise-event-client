import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const MyOrder = () => {

    const {users, isLoading} = useAuth()
    const [booking, setBooking] = useState([])
    // const [orders, setOrders] = useState([])

    useEffect(() => {
        
        const url = `http://localhost:5000/booking?email=${users?.email}`
        fetch(url)
            .then(res => res.json())
        .then(data => setBooking(data))
    }, [users?.email])


    

  ////////////////Dynamically Delete  
    const handleMyOrder = (id) => {
        const process = window.confirm('Are you sure want to delete')
        if (process) {
            const url = `http://localhost:5000/booking/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                   
                        alert('delete')
                        const remainOrders = booking.filter(e => e._id !== id)
                        setBooking(remainOrders)
                }
            })
        }
}

    return (
        <div>
            <h3 className="text-4xl uppercase font-semibold">Booking Events : {booking.length} </h3>
           
            <table className="table-auto w-full" >
                        <thead>
                            <tr className="bg-pink-700 border-2 border-pink-900">
                            <th>Date</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                {
                    
                    booking.map(event => <tbody key={event._id}>
                        {isLoading &&   <div className="flex justify-center items-center">
                        <div
                    className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 "
                    ></div>
                        </div>}
                            <tr className="bg-pink-700 border-2 border-pink-900 text-yellow-100">
                            <td className="border-r-2 border-pink-900">{event.date}</td>
                            <td className="border-r-2 border-pink-900">{event.title}</td>
                            <td className="border-r-2 border-pink-900">{event.email}</td>
                            <td className="border-r-2 border-pink-900">{event.price}</td>
                            <td className="border-r-2 border-pink-900">{event.phone}</td>
                            <td className="border-r-2 border-pink-900" >{event.description}</td>
                            <td className="border-r-2 border-pink-900 text-gray-100" >{event.status}</td>
                            <td >
                                <Link to={`/dashboard/payment/${event._id}`}>
                                    <button
                                        className="bg-yellow-50 text-red-700 px-3">Pay</button>
                                </Link>
                            </td>
                            <td >
                            <button onClick={() => handleMyOrder(event._id)} className="text-yellow-50">X</button>
                            </td>
                            </tr>                      
                        </tbody>
                       
                        
)
                }
 </table>
        </div>
    );
};

export default MyOrder;