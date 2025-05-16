import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='max-w-[1320px] mx-auto px-6 py-3'>
            <h2 className='text-green-700 text-2xl mt-8 text-center'>Nested link example (without NavLink)</h2>
            <nav className='flex gap-10 justify-center mt-4 mb-4 text-lg'>
                <Link
                    to="contactform"
                    className='text-purple-700 hover:text-red-500 font-bold'
                >
                    Form
                </Link>
                <Link
                    to="link2"
                    className='text-purple-700 hover:text-red-500 font-bold'
                >
                    Link-2
                </Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Contact;
