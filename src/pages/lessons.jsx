import React from 'react'
import LessonCard from '../components/lessonCard';
import LessonForm from '../components/lessonForm';


const portfolio = () => {

  const courseData = [
    {
      title: 'Beginner Lesson',
      cost: '100',
      bio: 'Learn to fly a drone safely with these lessons! This drone lesson could set you on the road to becoming a pro drone pilot and pro film-maker, producing slick aerial images.',
    },
    {
      title: 'Advanced Lesson',
      cost: '200',
      bio: 'Enhance your drone flying skills with our advanced lesson! This lesson is designed to help experienced drone pilots refine their abilities and elevate their expertise.',
    },
    {
      title: 'Cinematic Lesson',
      cost: '120',
      bio: "This lesson focuses on the cinematic aspect of drone flying. This is perfect for those who are looking to learn how to edit their videos and create professional-quality aerial videos.",
    },
  ];


  return (
    <section className="bg-white py-12 min-h-screen">
      <div className="container mx-auto md:px-4 px-16 lg:px-4 font-raleway">
        <div className=''>
          <h1 className='text-center text-1xl tracking-widest mt-20 px-5 '>OUR LESSONS</h1>
          <h1 className='text-center text-4xl px-5 font-bold mt-4 max-w-[600px] mx-auto'>There's a lesson for everybody, no matter your level.</h1>
        </div>
        <div className="flex flex-wrap mt-20 gap-x-8 justify-center gap-y-10 lg:py-10">
          {courseData.map((member, index) => (
            <LessonCard
              key={index}
              title={member.title}
              cost={member.cost}
              bio={member.bio}
            />
          ))}
        </div>
        <LessonForm />
      </div>
    </section>
  )
}

export default portfolio