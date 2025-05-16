import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='max-w-[1320px] mx-auto px-6 py-3'>
            <h2 className='text-green-700 text-2xl mt-8 text-center'>Nested nav link example</h2>
            <nav className='flex gap-10 justify-center mt-4 mb-4 text-lg'>
                <NavLink to="contactform" className={({ isActive }) => isActive
                    ? 'text-red-500 font-bold'
                    : 'text-purple-700 hover:text-red-500 font-bold'
                }
                >
                    Form
                </NavLink>
                <NavLink to="link2" className={({ isActive }) => isActive
                    ? 'text-red-500 font-bold'
                    : 'text-purple-700 hover:text-red-500 font-bold'
                }
                >
                    Link-2
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default Contact;
