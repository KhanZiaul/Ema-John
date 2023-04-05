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
                <a href="/order">Order</a>
                <a href="/order_review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>    
        </nav>
    );
};

export default Header;