import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../utils/helper';

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
                    <Link
                        key={index}
                        to={link.path}
                        className="font-bold text-white hover:text-red-500">
                        {link.name}
                    </Link>
                ))}
            </div>
            <button className="hidden md:block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                Get Started
            </button>
            <div onClick={toggleNavbar} className="md:hidden cursor-pointer z-30 flex flex-col gap-1">
                <span className={`bg-white block w-6 h-1 transition-all duration-300 ${menuOpen && "rotate-45 translate-y-[8px]"}`}></span>
                <span className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen && "opacity-0"}`}></span>
                <span className={`block w-6 h-1 bg-white transition-all duration-300 ${menuOpen && "-rotate-45 -translate-y-[8px]"}`}></span>
            </div>
            <div
                className={`fixed top-0 right-0 w-full h-screen bg-black z-20 flex flex-col items-center justify-center space-y-6 transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}          >
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className="font-bold text-lg text-white hover:text-red-500"
                        onClick={() => setMenuOpen(false)} >
                        {link.name}
                    </Link>
                ))}
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
