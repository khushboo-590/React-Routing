import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../utils/helper';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };
   return (
        <nav className="px-6 py-5 flex items-center justify-between max-w-[1320px] mx-auto relative">
            <div className="text-black text-lg font-semibold">Page logo</div>
            <div className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                    <NavLink key to={link.path}
                        className={({ isActive }) =>
                            `font-bold ${isActive ? 'text-red-500' : 'text-black'}`}    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
            <button className="hidden md:block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                Get Started
            </button>
            <div onClick={toggleNavbar} className="md:hidden cursor-pointer z-30 flex flex-col gap-1">
                <span className={`bg-black block w-6 h-1 transition-all duration-300 ${menuOpen && "rotate-45 translate-y-[8px]"}`}></span>
                <span className={`block w-6 h-1 bg-black transition-all duration-300 ${menuOpen && "opacity-0"}`}></span>
                <span className={`block w-6 h-1 bg-black transition-all duration-300 ${menuOpen && "-rotate-45 -translate-y-[8px]"}`}></span>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white z-20 flex flex-col items-center justify-center space-y-6 transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:hidden`}>
                {navLinks.map((link) => (
                    <NavLink key to={link.path} className={({ isActive }) =>
                            `font-bold text-xl ${isActive ? 'text-red-500' : 'text-black'}`}
                        onClick={() => setMenuOpen(false)}>{link.name}</NavLink>
                ))}
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;
