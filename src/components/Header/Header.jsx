import React, { useContext } from 'react';
import logo from '../../assets/images/favicon.ico'
import './Header.css'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
const Header = () => {
    const { loginUser } = useContext(AuthContext)
    console.log(loginUser)
    return (
        <nav className='flex justify-between items-center p-5 bg-slate-500'>
            <Link to='/'>
                <img className='w-[60px]' src={logo} alt="" />
            </Link>

            <div className='text-white flex gap-5'>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""
                    }
                >
                    Shop
                </NavLink>
                <NavLink
                    to="/orders"
                    className={({ isActive }) => isActive ? "active" : ""
                    }
                >
                    Orders
                </NavLink>
                <NavLink
                    to="/inventory"
                    className={({ isActive }) => isActive ? "active" : ""
                    }
                >
                    Inventory
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) => isActive ? "active" : ""
                    }
                    
                >
                    Login
                </NavLink>

                <NavLink
                    to="/register"
                    className={({ isActive }) => isActive ? "active" : ""
                    }

                >
                    Register
                </NavLink>

            </div>
        </nav>
    );
};

export default Header;