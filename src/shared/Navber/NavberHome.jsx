import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const NavberHome = () => {
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
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
       {navLinks}
      </ul>
    </div>
    <div className="flex items-center gap-2">
        <img className='w-[100px] mr-5' src={logo} alt="" />
        
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm  border focus:outline-none border-gray-300 rounded-lg   " placeholder="Search your destination..." required/>
        <button type="submit" class="hidden text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
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
 
export default NavberHome;