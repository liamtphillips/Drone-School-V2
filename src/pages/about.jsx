import React from 'react';
import { images } from '../assets/';

const About = () => {
  return (
    <div id="about" className='container font-raleway px-16 lg:px-12 lg:pr-10 mx-auto min-h-screen pb-5 flex flex-col justify-center lg:pb-20 items-center text-black'>
      <div>
        <h1 className='font-raleway text-center text-1xl tracking-widest capitalize lg:mt-20 px-5'>ABOUT US</h1>
        <h1 className='font-raleway text-center text-4xl px-5 font-bold mt-4 max-w-[600px] mx-auto'>Expert drone tutors, at your service, anytime.</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-10 md:mt-20">
        <div className="col-span-1">
          <img
            src={images.aboutImage2}
            alt="about"
            className="max-w-full h-auto"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">We're located in Liverpool.</h2>
          <p className="text-lg lg:max-w-[600px]">
           Our office is located right in the center of Liverpool, and our flight lessons take place along the river.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-10 lg:mt-0">
        <div className="col-span-1 flex flex-col justify-center order-2 md:order-1 ">
          <h2 className="text-3xl font-bold mb-2">Elevating Excellence.</h2>
          <p className="text-lg">
          Our skilled pilots navigate the horizons with precision, capturing breathtaking visuals and unlocking new perspectives.
            We're here to teach you everything you need to know to be a succesful drone pilot.
          </p>
        </div>
        <div className="col-span-1 order-1 md:order-2">
          <img
            src={images.aboutDrone}
            alt="map"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>

  );
};

export default About;
