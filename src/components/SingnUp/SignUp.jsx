import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    function formSubmit(e) {
        e.preventDefault()
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        const ConfirmPass = e.target.confirmPassword.value;

        if(Password !== ConfirmPass){

            alert('Your Password is not Same')

            return ;
        }

        createUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                userNameUpdate(userCredential.user,Name)
                emailVarification(userCredential.user)
            })
            .catch((error) => {
                const errorMessage = error.message;
            });

        e.target.reset()
    }

    function userNameUpdate(user,name) {
        updateProfile(user, {
            displayName:name
        }).then(() => {

        }).catch((error) => {
        });
    }

    function emailVarification(user) {
        sendEmailVerification(user)
        .then(() => {
            alert('Email Verification Send')
        });
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-4xl font-semibold">Register</h1>
                </div>
                <form onSubmit={formSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div>
                            <small>Already have an account? <Link to='/login' className='text-blue-700 underline'>Login</Link></small>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;