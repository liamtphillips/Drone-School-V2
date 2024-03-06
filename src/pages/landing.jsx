import React from 'react';
import { Link } from 'react-scroll';
import About from './about';
import Banner from '../components/banner';
import Drones from '../pages/drones';
import Team from '../pages/team';
import CustomerReviews from '../pages/customerReviews';
import heroVideo from '../assets/herovid2.mp4'



const Landing = () => {
  return (
    <section className='h-full w-full'>
      <div className="font-raleway bg-blue-500">
        <video
          className='object-cover h-full w-full absolute hidden lg:block'
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="min-h-screen flex justify-center container mx-auto">
          <div className="flex flex-col justify-center text-center items-center px-10 z-[10] text-black pb-48">
            <h1 className=" text-3xl md:text-6xl font-raleway font-semibold ">The Sky's the Limit!</h1>
            <p className="font-exo lg:text-2xl text-lg mt-10 lg:max-w-xl">
              Whether you're a beginner or an experienced pilot aiming to refine your skills,
              our expert instructors are here to guide you.
            </p>
            <div className="flex gap-x-3 mt-10 lg:z-10 justify-center lg:justify-start">
              <Link to="about" smooth={true} duration={500}>
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg p-4 ">
                  Learn More
                </button>
              </Link>
              <a href="/lessons">
                <button className="bg-white font-semibold rounded-lg p-4 ">View Lessons</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-200'>
      <About id="about" />
      </div>
      <Banner />
      <div className='bg-slate-200'>
      <Team />
      <Drones />
      <CustomerReviews />
      </div>
    </section>
  );
};

export default Landing;