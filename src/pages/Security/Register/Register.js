import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import signupImage from '../../../images/register.png';
import Swal from 'sweetalert2'


const Register = () => {

  const { users, googleLoginUsers, createNewUser, isLoading } = useAuth();
  //modal
    const navigate = useNavigate();
    const location = useLocation();
//react hook
const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    if (data.password !== data.password2) {
        Swal.fire({
            icon: 'error',
            title: 'Oops... Invalid info',
            text: 'Something went wrong!',
        })
        reset()
       return
    }
   
        createNewUser(data.email, data.password, data.name, location,  navigate)
    
  console.log(data)
};

//google login
const handleGoogle = () => {
  googleLoginUsers(location, navigate)
}


    return (
            <div  className="md:grid grid-cols-2 gap-4 items-center mx-auto ">
            
            
          

                <div className="w-3/4 mx-auto">
                {/* <p className="animate-spin text-pink-700">h</p> */}
                <img  src={signupImage} alt="" />
            </div>

            <div className="w-2/4">

            {isLoading &&
                <div className="flex justify-center items-center">
                    <div
                        className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
                    ></div>
                </div>}

                    {!isLoading &&
                        <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name"
                className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
                    {...register("name", { required: true, maxLength: 20 })} />
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
                    className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
                    type="password" placeholder="Confirm Password"
                    {...register("password2")} /> <br />
                
                <input
                    className=" cursor-pointer block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 bg-purple-600"
                    type="submit" value="Register" />
            </form>}
            

            <Link to="/login">Create an account <b>Click </b> here </Link> <br />
            <button className="bg-green-600 p-3" onClick={handleGoogle}>
                Google
            </button>
            </div>

     

    </div>
    
                  
    );
};

export default Register;