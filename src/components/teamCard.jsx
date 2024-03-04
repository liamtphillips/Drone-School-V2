import React from 'react';


const CardComponent = ({ name, role, image, bio, experience }) => {

  return (
    <div className="group h-96 w-80 [perspective:1000px] rounded-xl ">
      <div className="relative h-full w-full cursor-pointer rounded-xl shadow-xl shadow-blue-800/20 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className='absolute inset-x-0  flex flex-col justify-center items-center gap-y-5  bottom-8'>
          <h1 className='text-xl font-bold'>{name}</h1>
          <p className='mb-10'>{role}</p>
        </div>
        <div className="absolute inset-0 flex  justify-center mt-10">
          <img className="h-40 w-40  rounded-full object-cover shadow-xl mt-2 shadow-black/50" src={image} alt="" />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-800 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-2">Experience</h1>
            <p className="lg:text-base text-sm mb-2 text-gray-300">{experience}</p>
            <h1 className="text-2xl font-bold mb-2">About</h1>
            <p className="lg:text-base text-sm text-gray-300">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;





