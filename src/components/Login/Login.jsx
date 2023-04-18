import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import { EyeIcon } from '@heroicons/react/24/solid'

const Login = () => {

    const { signinUser } = useContext(AuthContext)

    const [showOrHide, setShowOrHide] = useState(true)

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()

    function formSubmit(e) {
        e.preventDefault()
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        signinUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
        e.target.reset()
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-4xl font-semibold">Login</h1>
                </div>
                <form onSubmit={formSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className='relative'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover underline text-blue-700">Forgot password?</Link>
                                </label>
                            </div>
                            <div className='absolute top-12 right-4'>
                                <EyeIcon className="h-6 w-6 text-blue-500" />
                            </div>
                        </div>
                        <div>
                            <small>New to Ema-john? <Link to='/register' className='text-blue-700 underline'>Create New Account</Link></small>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;