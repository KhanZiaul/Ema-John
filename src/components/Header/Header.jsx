import React from 'react';
import logo from '../../assets/images/favicon.ico'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-slate-400'>
            <Link to='/order'>
            <img className='w-[60px]' src={logo} alt="" />
            </Link>

            <div className='text-white flex gap-5'>
                <Link to="/order">Order</Link>
                <Link to="/order_review">Order Review</Link>
                <Link to="/Manage Inventory">Manage Inventory</Link>
                <Link to="/Login">Login</Link>
            </div>    
        </nav>
    );
};

export default Header;