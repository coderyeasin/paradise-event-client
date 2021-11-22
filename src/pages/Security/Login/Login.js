import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';
import signupImage from '../../../images/register.png';
import Swal from 'sweetalert2'


const Login = () => {

    const { users, authError, isLoading, googleLoginUsers, usersCanLogin } = useAuth();
        //modal
    const navigate = useNavigate();
    const location = useLocation()

    //react hook
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if (data) {
    
            Swal.fire(
                `Congratulations! ${users?.displayName}`,
                'Successfully Login!',
                'success'
            )
           
        }
        // if (!data) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Something went wrong!',
        //         footer: '<a href="">Why do I have this issue?</a>'
        //       })
        // }
        usersCanLogin(data.email, data.password, location, navigate)
      
    };
    
    //google login
    const handleGoogle = () => {
        googleLoginUsers(location, navigate)
    }


    return (
        <>
        

            
            
        <div className="md:grid grid-cols-2 gap-4 items-center mx-auto ">    

            <div className="w-3/4 mx-auto">
                <img  src={signupImage} alt="" />
            </div>

            <div className="w-2/4">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
                    type="email" placeholder="Email"
                    {...register("email",
                        )} />
                
                <input
                    className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
                    type="password" placeholder="Password"
                    {...register("password")} /> <br />
                
                <input
                    className="cursor-pointer block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 bg-purple-600"
                    type="submit" value="Login" />
            </form>
            

            <Link to="/register">Don't have an account <b>Click </b> here </Link> <br />
            <button className="bg-green-600 p-3" onClick={handleGoogle}>
                Google
            </button>
            </div>

     </div>
        </>
    );
};

export default Login;