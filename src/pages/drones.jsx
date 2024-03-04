import React, { useState } from 'react';
import { images } from '../assets/';

const Drones = () => {
  const [selectedDrone, setSelectedDrone] = useState('mavic');

  const droneData = {
    mavic: {
      image: images.mavic,
      model: 'Mavic Pro',
      topSpeed: '40mph',
      year: '2022',
      camera: '4k Gimbal',
      weight: '400g',
      range: '4 miles'

    },
    air: {
      image: images.air,
      model: 'DJI Air 3',
      topSpeed: '42mph',
      year: '2023',
      camera: '4k Gimbal',
      weight: '300g',
      range: '3.4 miles'

    },
    mini: {
      image: images.mini,
      model: 'DJI Mini 3',
      topSpeed: '32mph',
      year: '2023',
      camera: '4k Mini',
      weight: '200g',
      range: '2.8 miles'

    },
    maurice: {
      image: images.maurice,
      model: 'Maurice M300',
      topSpeed: '15.7mph',
      year: '2023',
      camera: 'Zenmuse H20T',
      weight: '3kg',
      range: '4.9 miles'

    },
  };

  const handleDroneButtonClick = (drone) => {
    setSelectedDrone(drone);
  };

  const selectedDroneData = droneData[selectedDrone];
  return (
    <div className=' '>
      <div className='container px-16 lg:px-18 mx-auto min-h-screen font-raleway '>
        <div className='text-center lg:pt-20'>
          <h1 className='font-raleway text-center text-1xl tracking-widest lg:mr-4 mt-20 px-5'>THE TOOLS WE USE</h1>
          <h1 className='text-5xl font-bold mt-6'>Our Drone Fleet</h1>
          <p className='mt-6 mb-5 lg:mb-0'>We have a variety of high quality drones available for our lessons.</p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-20 lg:py-10 px-18">
          <div className="flex flex-col lg:flex-row w-full max-w-full ">
            <div className="lg:w-1/4 p-4 flex flex-col space-y-4 mb-10 lg:mb-0 ">
              <button
                className={` py-4 px-4 text-xl border-2 border-black text-black font-semibold rounded ${selectedDrone === 'mavic' ? ' bg-blue-800 text-white' : ''
                  }`}
                onClick={() => handleDroneButtonClick('mavic')}
              >
                DJI Mavic Pro 3
              </button>
              <button
                className={` py-4 px-4 border-2 border-black text-black text-xl font-semibold rounded ${selectedDrone === 'air' ? 'bg-blue-800 text-white ' : ''
                  }`}
                onClick={() => handleDroneButtonClick('air')}
              >
                DJI Air 3
              </button>
              <button
                className={`py-4 px-4  text-xl border-2 border-black font-semibold rounded ${selectedDrone === 'mini' ? 'bg-blue-800 text-white ' : ''
                  }`}
                onClick={() => handleDroneButtonClick('mini')}
              >
                DJI Mini 3 Pro
              </button>
              <button
                className={`py-4 px-4 text-xl border-2 border-black font-semibold rounded ${selectedDrone === 'maurice' ? 'bg-blue-800 text-white' : ''
                  }`}
                onClick={() => handleDroneButtonClick('maurice')}
              >
                Maurice M300
              </button>
            </div>
            <div className="mb-10 md:mb-0">
              {selectedDrone === 'mavic' ? (
                <img src={images.mavic} alt={selectedDroneData.model} className="w-full" />
              ) : selectedDrone === 'air' ? (
                <img src={images.air} alt={selectedDroneData.model} className="w-full" />
              ) : selectedDrone === 'mini' ? (
                <img src={images.mini} alt={selectedDroneData.model} className="w-full" />
              ) : (
                <img src={images.maurice} alt={selectedDroneData.model} className="w-full" />
              )}
            </div>
            <div className="lg:w-1/4 p-4 mb-10 md:mb-0 pl-2 lg:mr-4 ">
              <table className="table-auto w-full lg:min-w-[320px] min-h-[320px] text-sm lg:text-lg">
                <thead className='border-2 border-black bg-blue-800'>
                  <tr>
                    <th className=" text-white text-2xl py-2" colSpan="2">
                      Specifications
                    </th>
                  </tr>
                </thead>
                <tbody className='border-black border-2 text-center  '>
                  <tr className='border-black border-2  '>
                    <td className='border-black border-2 font-semibold  '>Model</td>
                    <td className='w-1/2'>{selectedDroneData.model}</td>
                  </tr>
                  <tr className='border-black border-2'>
                    <td className='border-black border-2 font-semibold  '>Top Speed</td>
                    <td>{selectedDroneData.topSpeed}</td>
                  </tr>
                  <tr className='border-black border-2'>
                    <td className='border-black border-2 font-semibold  '>Year</td>
                    <td className=''>{selectedDroneData.year}</td>
                  </tr>
                  <tr className='border-black border-2'>
                    <td className='border-black border-2 font-semibold  '>Camera</td>
                    <td className=''>{selectedDroneData.camera}</td>
                  </tr>
                  <tr className='border-black border-2'>
                    <td className='border-black border-2 font-semibold  '>Weight</td>
                    <td className=''>{selectedDroneData.weight}</td>
                  </tr>
                  <tr className='border-black border-2'>
                    <td className='border-black border-2 font-semibold  '>Range</td>
                    <td className=''>{selectedDroneData.range}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drones