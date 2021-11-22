import React, { useEffect, useState } from 'react';

const AllEvents = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEvents(data)
            })
    }, [])
    return (
        <div>
                  <h3 className="text-xl my-3 font-bold">Events : {events.length} </h3>
            <table className="table-auto w-full" >
                        <thead>
                            <tr className="bg-pink-700 border-2 border-pink-900">
                            {/* <th>Date</th> */}
                            {/* <th>Name</th> */}
                            <th>Title</th>
                            <th>Facilities</th>
                            <th>Description</th>
                            <th>Location</th>

                            <th>Action</th>
                            </tr>
                        </thead>
                {
                    
                    events.map(event => <tbody key={event._id}>
                      
                            <tr className="bg-pink-700 border-2 border-pink-900 text-yellow-100">
                            {/* <td className="border-r-2 border-pink-900">{event.date}</td> */}
                            <td className="border-r-2 border-pink-900">{event.title}</td>
                            <td className="border-r-2 border-pink-900">{event.facilities.slice(31, 45)}</td>
                            <td className="border-r-2 border-pink-900" >{event.description.slice(0, 80)}...</td>
                            <td className="border-r-2 border-pink-900 text-gray-100" >{event.location}</td>
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

export default AllEvents;