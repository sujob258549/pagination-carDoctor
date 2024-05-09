import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navber from "../Shard/Navber";
import Footer from "../Shard/Footer";
import { CreatAuth } from "../Firebase/AuthContext";
import signup from '../../../assets/image/images/login/login.svg'


const Signin = () => {

    const { ligineUser, goodleSignIn } = useContext(CreatAuth)
    const [shoandHideIcone, setShoandHideIcone] = useState(false);
    const handelSubmitLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        ligineUser(email, password)
            .then(result => console.log(result))
            .catch(error => console.log(error))

    }

    const handelSignInButton = () => {
        goodleSignIn()
            .then(result => console.log(result))
            .catch(error => console.error(error))
    }


    return (
        <div>
            <Navber></Navber>
            <div className="">
                <div className="py-10 mx-auto md:w-[80%] w-[90%]">
                    <h2 className="text-4xl font-bold text-center py-10 md:text-6xl">Login <span className="text-[#00EEFF]">page</span></h2>
                    <div className="grid grid-cols-1 gap-10 md:gap-0 lg:grid-cols-2 items-center p-10">
                        <div>
                            <img src={signup} alt="" />
                        </div>


                        <div className="-top-10">
                            <div data-aos="flip-left" className="relative card shadow shrink-0  bg-base-100 mx-auto my-10">
                                <div className="mt-5" >
                                    <img className="w-40  mx-auto" src="https://i.ibb.co/4T00VND/kisspng-computer-icons-login-management-user-5ae155f3386149-6695613615247170432309-removebg-preview.png" alt="" />
                                </div>
                                <h1 className="text-[35px] font-bold text-center pt-4">Login your account</h1>
                                <form className="card-body" onSubmit={handelSubmitLogin}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Email address</span>
                                        </label>
                                        <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Password</span>
                                        </label>
                                        <input type={shoandHideIcone ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input input-bordered" required />
                                        <div className="absolute right-5 bottom-4" onClick={() => setShoandHideIcone(!shoandHideIcone)}>
                                            {
                                                shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                            }
                                        </div>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>

                                    {<p className="text-xl font-medium text-green-500 text-center "></p>}
                                    <div className="form-control">
                                        <button className="btn  bg-[#FF3811] text-white">Login</button>
                                    </div>
                                </form>
                                <div className="mx-auto mb-10">
                                    <button onClick={handelSignInButton} className="btn btn-outline  text-sm mr-3 ">
                                        <FaGoogle className="text-green-500 text-xl font-bold"></FaGoogle>
                                        Log with Google
                                    </button>
                                    <button className="btn btn-outline  mt-2">
                                        <FaGithub className="text-xl font-bold"></FaGithub>
                                        Log with Gothub
                                    </button>
                                </div>
                                {<p className="font-semibold px-5 text-center mb-5 text-red-600"></p>}
                                <p className="font-semibold text-[16px] pb-10 text-center">Dont’t Have An Account ? <Link to={'/signup'} className="text-[#F75B5F]">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Signin;