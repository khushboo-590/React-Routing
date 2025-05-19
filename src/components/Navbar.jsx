import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../utils/helper';
import CustomBtn from './common/CustomBtn';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    return (
        <nav className="px-6 py-5 flex items-center justify-between max-w-[1320px] mx-auto relative">
            <Link to='/' className="text-white text-3xl font-semibold items-center">Page logo</Link>
            <div className="hidden md:flex space-x-6">
                {navLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        className={({ isActive }) =>
                            `font-bold ${isActive ? "text-red-500" : "text-white"}`
                        }
                    >
                        {link.name}
                    </NavLink>
                
                ))}
            </div>
            <CustomBtn btn="Get Started" className="bg-red-500 hover:bg-red-600 hidden md:block "/>

            <div onClick={toggleNavbar} className="md:hidden cursor-pointer z-30 flex flex-col gap-1">
                <span className={`bg-white block w-6 h-1 transition-all duration-300 ${menuOpen && "rotate-45 translate-y-[8px]"}`}></span>
                <span className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen && "opacity-0"}`}></span>
                <span className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen && "-rotate-45 -translate-y-[8px]"}`}></span>
            </div>
            <div
                className={`fixed top-0 right-0 w-full h-screen bg-black z-20 flex flex-col items-center justify-center space-y-6 transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}          >
                {navLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        className={({ isActive }) =>
                            `font-bold ${isActive ? "text-red-500" : "text-white"}`
                        }
                    >
                        {link.name}
                    </NavLink>
                  
                ))}
                <CustomBtn btn="Get Started"className="bg-red-500 hover:bg-red-600 "
                   
                />
            </div>
        </nav>
    );
};

export default Navbar;
