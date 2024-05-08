import { NavLink } from 'react-router-dom';
import logo from '../../../assets/image/logo.svg'
import './navber.css'
import { useContext } from 'react';
import { CreatAuth } from '../Firebase/AuthContext';

const Navber = () => {

    const {signout , user} = useContext(CreatAuth)

    const navber = <>

        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink to={'/signup'}>Sing Up</NavLink>
       {
        user ?  
        <NavLink className='' onClick={()=>signout()}>Sing Out</NavLink> 
        : 
        <NavLink to={'/signin'}>Sing In</NavLink> 
       
       }

    </>
    return (
        <div className="bg-yellow-200">
            <div className="max-w-7xl mx-auto px-5 py-5">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu navmanu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navber
                                }
                            </ul>
                        </div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu navmanu menu-horizontal px-1">
                            {
                                navber
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn btn-outline border border-[#FF3811] text-[18px] font-semibold text-[#FF3811]">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;