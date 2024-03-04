import React from 'react';
import { images } from '../assets/';
import CardComponent from '../components/teamCard';

const TeamSection = () => {
  const teamData = [
    {
      name: 'John Green',
      role: 'Team Leader',
      experience: '10 years drone hobbyist with great leadership skills.',
      bio: 'A dynamic leader and accomplished drone pilot who brings precision to the forefront of aerial operations. John combines his passion for flying with his exceptional organizational skills.',
      image: images.teamMember1,
    },
    {
      name: 'Mike Smith',
      role: 'Drone Tutor',
      experience: 'Military trained drone tutor with 8 years experience.',
      bio: 'Mike is a true expert in the art of flying drones. His journey began in the heart of military aviation, where he logged countless hours piloting advanced drones for tactical operations.',
      image: images.teamMember2,
    },
    {
      name: 'Jane Wright',
      role: 'Videographer',
      experience: 'Drone pilot with a degree in videography.',
      bio: "Jane is a videographer who paints narratives through the lens of her drone. With a passion for capturing moments from above, she transforms landscapes into cinematic canvases.",
      image: images.teamMember3,
    },
  ];

  return (
    <section className=" py-12 min-h-screen flex font-raleway ">
      <div className="container mx-auto md:px-4 px-16 lg:px-0">
        <div>
          <h1 className='text-center text-1xl tracking-widest capitalize mt-20 px-5 '>OUR TEAM</h1>
          <h1 className='text-center text-4xl px-5 font-bold mt-4 max-w-[600px] mx-auto'>Let's meet your new drone tutors!</h1>
        </div>
        <div className="flex flex-wrap mt-20 lg:py-10 gap-x-28 gap-y-20 justify-center">
          {teamData.map((member, index) => (
            <CardComponent
              key={index}
              name={member.name}
              role={member.role}
              experience={member.experience}
              image={member.image}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;