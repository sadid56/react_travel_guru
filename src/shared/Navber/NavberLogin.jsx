import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavberLogin = () => {
  const {user} = useContext(AuthContext)
    const navLinks = <>
    <li><NavLink to='/'>News</NavLink></li>
    <li><NavLink to='/destination'>Destination</NavLink></li>
    <li><NavLink to='/blog'>blog</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (   
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
             {navLinks}
            </ul>
          </div>
          <div className="flex items-center gap-2">
              <img className='w-[100px] mr-5' src={logo} alt="" />
              
     
      
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <NavLink to='/userAccount' className="text-xl font-semibold">{user.displayName}</NavLink> :
            <Link to='/login'><button className='bg-[#F9A51A] px-4 py-2 rounded-md font-semibold'>Login</button></Link>
          }
        </div>
      </div>
     );
}
 
export default NavberLogin;