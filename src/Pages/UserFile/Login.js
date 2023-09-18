import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import imge from '../../Image/Biman-01.jpg';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
 
    const {login} = useContext(authContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handellogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="hero w-full ml-10 my-10">
                <div className="hero-content grid gap-15 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={imge} className='w-3/5 rounded-lg' alt='' />
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-10 pb-10">
                        <form onSubmit={handellogin} className="card-body">
                            <div className="form-control">
                            <h1 className="text-4xl text-center font-bold">Login!</h1>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type='submit' value="Log In" />
                            </div>
                        </form>
                        <p className='text-center'>Start up for New <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;