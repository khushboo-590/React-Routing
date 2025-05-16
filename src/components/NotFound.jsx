import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">        
            <h2 className="text-4xl font-semibold mb-2 text-red-600">Page Not Found</h2>
            <p className="text-gray-700 mb-6">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            
        </div>
    );
};

export default NotFound;
