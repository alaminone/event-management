import { Link, NavLink } from "react-router-dom";
import { GiGamepadCross} from 'react-icons/gi';
import { FaUser} from 'react-icons/fa';
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const Navbar = () => {

  const {user,logout} = useContext(AuthContex);

  const handellogout = () =>{
    logout()
    .then()
    .catch()
  }

    const navlink = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/srvice"}>Srvice</NavLink></li>
    <li><NavLink to={"/newevent"}>Details</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlink}
            </ul>
          </div>
        <GiGamepadCross className="text-3xl text-blue-700"></GiGamepadCross>
          <a className="btn btn-ghost normal-case text-2xl font-bold">GamE <span className="text-blue-700">ZooN</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navlink}
          </ul>
        </div>
        <div className="navbar-end">

          {
            user ?  <button onClick={handellogout} className="btn btn-outline btn-primary">Log Out <FaUser></FaUser></button>
            :
            <Link to={"/login"}>  <button className="btn btn-outline btn-primary">LogIn</button></Link>
          }
      
        </div>
      </div>
    );
};

export default Navbar;