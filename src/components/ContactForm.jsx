import React from 'react';

const ContactForm = () => {
  return (
    <form className="max-w-[600px] mx-auto p-6 bg-white  space-y-4">
      <div className="flex flex-col md:flex-row gap-4 mt-20">
        <input
          type="text" placeholder="First name" className="flex-1 border border-gray-300 rounded px-4 py-2 "
        />
        <input
          type="text" placeholder="Last name" className="flex-1 border border-gray-300 rounded px-4 py-2 "
        />
      </div>

      <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-4 py-2 "
      />

      <textarea placeholder="About" className="w-full h-32 border border-gray-300 rounded px-4 py-2 resize-none "
      />

      <button type="submit" id='home' className=" text-black px-6 py-2 rounded bg-white  border-1  hover:text-white  hover:bg-black"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
