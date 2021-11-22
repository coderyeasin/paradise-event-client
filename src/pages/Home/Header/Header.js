import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { users, usersLogout} = useAuth();
   
    return (
        <div >
            <div className="flex justify-around items-center mt-5">
                <a>
                    <img className="w-40 h-18 p-2" src={logo} alt="" />
                </a>
                <nav>
                    <ul className="text-right mb-2">
                        <Link to="/events" className="rounded-2xl border-0 bg-pink-800 p-2 m-1 hover:bg-pink-800 hover:text-gray-800 text-white" > Events </Link>
                        {/* {users?.email &&
                             <Link to="" className="rounded-2xl border-0 bg-red-800 p-2 m-1 hover:bg-red-800 hover:text-gray-800 text-white" >  {users.displayName}  </Link>
                       } */}
                        {users?.email &&
                             <Link to="/dashboard" className="rounded-2xl border-0 bg-pink-800 p-2 m-1 hover:bg-pink-800 hover:text-gray-800 text-white" >  Dashboard  </Link>
                       }
                        

                        <Link to="/login" className="rounded-2xl border-2 border-pink-800 p-2 m-1 hover:bg-pink-800  hover:text-blue" > 
                            {users?.email ?
                                <button onClick={usersLogout}> Logout </button> :
                                ' Login'}
                     
                                   
                        </Link>
                    </ul> <hr className="" />





                <ul className="">
                    <Link className="mr-3" to="/" > Home </Link>
                    <Link className="mr-3" to="/features" > Features </Link>
                    <Link className="mr-3" to="/events" > Services </Link>
                    <Link className="mr-3" to="/testimonial" > Testimonials </Link>
                    <Link className="mr-3" to="/news" > News </Link>
                    <Link className="mr-3" to="/contact" > Contacts </Link>
                </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;