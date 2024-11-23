import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menus = <>
        <li><Link to="/">Home</Link></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </>
    return (
        <div className=' fixed top-0 bg-primary shadow-lg left-0 right-0 z-50 py-2'>
            <div className="navbar max-w-[1440px]  mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                            {menus}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">AR-Emon</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {menus}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a download href="resume_aremon.pdf"><button className='btn btn-outline hover:text-white hover:bg-slate-700 text-white mb-0'> Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Header;