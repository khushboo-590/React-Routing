import React from 'react';
import img from '../assets/images/img.jpeg'

const Link2 = () => {
  return (
    <div className='px-6 py-3 max-w-[1320px] mx-auto  justify-center items-center text-center flex flex-col'>
      <h3 className=' text-3xl mb-4'>This is Image</h3>
      <img src={img} className='w-[500px] h-[400px] object-cover rounded-lg'></img>
      
    </div>
  );
};

export default Link2;

