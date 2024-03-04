import React from 'react'
import { images } from '../assets/';

const Contact = () => {
  return (
    <section className="bg-gray-200 ">
        <div className='container mx-auto min-h-screen'> 
      <div className="py-8 lg:py-16 px-10  mx-auto max-w-screen-xl flex">
        <div className="w-full lg:w-1/2 pr-8 mt-20 font-raleway">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 ">Contact Us</h2>
          <p className="mb-8 ">Get in touch and let's get started on your project.</p>
          <form action="#" className="space-y-8">
          <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-900 ">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 500" placeholder="name@email.com" required />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm  text-gray-900 ">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Let us know how we can help you" required />
            </div>
            <div className="col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-900">Your message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 " placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm text-center text-white rounded-lg bg-blue-900 sm:w-fit ">Send message</button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:block lg:ml-20 px-16 mt-20">
          <img src={images.droneContact} alt="" className='rounded-xl' />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;

