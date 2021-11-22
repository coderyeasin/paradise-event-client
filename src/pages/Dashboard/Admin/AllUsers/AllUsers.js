import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const AllUsers = () => {

const {isLoading} = useAuth()
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allusers')
            .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    
    const users = user.filter(user => user?.email && user?.displayName)


    return (
        <div>
            {isLoading && <div className="flex justify-center items-center">
        <div
            className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
        ></div>
    </div>}
            
            {!isLoading &&
                <div>
                
                    <h3 className="text-4xl uppercase font-semibold">Booking Events : {users.length} </h3>
           
                    <table className="table-auto w-full" >
                        <thead>
                            <tr className="bg-pink-700 border-2 border-pink-900">
                                <th>Email</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                    
                            users.map(event => <tbody key={event._id}>
                                {/* {isLoading &&   <div className="flex justify-center items-center">
                        <div
                    className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 "
                    ></div>
                        </div>} */}
                                <tr className="bg-pink-700 border-2 border-pink-900 text-yellow-100">
                                    <td className="border-r-2 border-pink-900">{event?.email}</td>
                                    <td className="border-r-2 border-pink-900">{event?.displayName}</td>
                                    <td >
                                        <button className="text-yellow-50">X</button>
                                    </td>
                                </tr>
                            </tbody>
                       
                        
                            )
                        }
                    </table>
                </div>}
        </div>
    );
};

export default AllUsers;