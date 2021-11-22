import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {
    const { users, admin, isLoading } = useAuth();
    

    return (
        <div>
           
            {isLoading && <div className="flex justify-center items-center">
        <div
            className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
        ></div>
    </div>}
            
          {!isLoading &&
            <div className="bg-pink-100 flex flex-wrap flex-row items-center pt-3 shadow-xl rounded-2xl my-20" >
            {!admin ? 
                <div className="w-60 items-center bg-pink-100 p-5 shadow-xl rounded-2xl  text-justify">
                    <h3 className="text-center text-xl py-5">{users?.displayName} Panel</h3>
                    <Link className="w-full  flex  items-center space-x-20 text-xl  px-10" to="/dashboard/myOrder"><FaBeer className="mx-2" /> Bookings</Link> <br />
                    <Link className="w-12/12 flex  items-center space-x-20  text-xl px-10" to="/dashboard/review"> <FaBeer className="mx-2" /> Review</Link> <br />
                    <Link className="w-12/12 flex  items-center space-x-20  text-xl px-10" to=""> <FaBeer className="mx-2" /> Pay</Link> <br />
                    <Link className="w-12/12 flex  items-center space-x-20  text-xl px-10" to=""> <FaBeer className="mx-2" /> Profile</Link> <br />
                    <Link className="w-12/12 flex  items-center space-x-20  text-xl px-10" to=""> <FaBeer className="mx-2" /> Settings</Link> <br />
                    <Link className="w-12/12 flex  items-center space-x-20  text-xl px-10" to=""> <FaBeer className="mx-2" /> Logout</Link>

                </div>

         :

                <div className="w-60 items-center bg-pink-100 p-5 shadow-xl rounded-2xl  text-justify">
                    <h3 className="text-center text-xl py-5">{users?.displayName} Panel</h3>
                        <Link className="w-full  flex  items-center space-x-20 text-xl  px-5" to="/dashboard/addEvents"><FaBeer className="mx-2" /> Add Events</Link> <br />
                        
                        <Link className="w-12/12 flex  items-center space-x-10  text-xl px-5" to="/dashboard/makeAdmin"> <FaBeer className="mx-2" /> Make Admin</Link> <br />
                        
                        <Link className="w-12/12 flex  items-center space-x-20  text-xl" to="/dashboard/AllUsers"> <FaBeer className="mx-2" /> Manage All users </Link> <br />
                        
                        <Link className="w-12/12 flex  items-center space-x-20  text-xl" to="/dashboard/AllEvents"> <FaBeer className="mx-2" /> Manage All Event </Link> <br />

                        <Link className="w-12/12 flex  items-center space-x-20  text-xl" to="/dashboard/ManageAllOrder"> <FaBeer className="mx-2" /> Manage All Order </Link> <br />
             
                    <Link className="w-12/12 flex  items-center space-x-20  text-xl px-5" to=""> <FaBeer className="mx-2" /> Settings</Link> <br />
                    
                    <Link className="w-12/12 flex  items-center space-x-20  text-xl px-5" to=""> <FaBeer className="mx-2" /> Logout</Link>

                    </div>
           }

                <div className="my-5 px-10 w-3/4">  
                    <Outlet />
                </div>
                </div>
           }
            
        </div>
    );
};

export default Dashboard;