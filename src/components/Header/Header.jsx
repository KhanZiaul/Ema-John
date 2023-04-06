import React from 'react';
import logo from '../../assets/images/favicon.ico'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-slate-400'>
            <Link to='/'>
            <img className='w-[60px]' src={logo} alt="" />
            </Link>

            <div className='text-white flex gap-5'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>    
        </nav>
    );
};

export default Header;