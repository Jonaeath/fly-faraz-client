import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(authContext);

  const handelSignOut =() =>{
    logOut()
    .then(()=> {})
    .catch(error => console.error(error))
  }

  return (
    <div className="navbar bg-sky-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content font-bold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link to="service">Our Services</Link></li> 
            <li><Link>Reviews</Link></li>           
            <li><Link>Contact</Link></li>
          </ul>
        </div>
        <Link className="pl-5 pr-2 text-xl text-primary-content font-bold">FLY Faraz</Link>
        <FontAwesomeIcon className='text-primary-content' icon={faPlane} />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold text-primary-content px-1">
          <li><Link>Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link to="service">Our Services</Link></li>
          <li><Link to ='review'>Reviews</Link></li>    
          <li><Link>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end mr-5 gap-3">
      {
        user?.email ?
        <>
        <li onClick={handelSignOut} className='btn btn-primary'><Link to="/serviceConform">SignOut</Link></li>
        </>
        :
        <li className='btn btn-primary'><Link to="/login">Login</Link></li>
        
      }
      <li className='btn btn-primary'><Link to="/signup">Sign Up</Link></li>
      </div>
    </div>
  );
};

export default Navbar;