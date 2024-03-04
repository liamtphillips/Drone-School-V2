import ReviewCard from '../components/ReviewCard';
import { images } from '../assets';

const CustomerReviews = () => {

   const reviews = [
    {
        imgURL: images.customer,
        customerName: 'Chloe Brown',
        rating: 5,
        feedback: "Having lessons with drone school really helped me get my freelance drone business off the ground!"
    },
    {
        imgURL: images.customer2,
        customerName: 'Jason Groves',
        rating: 4.5,
        feedback: "Such a great team, really friendly people, I enjoyed the lessons."
    }
];


  return (
    <section className='container mx-auto min-h-screen font-raleway pb-10 lg:pb-0 px-16 md:px-0'>
     <div className='text-center lg:pt-20'>
        <h1 className='text-1xl pt-10 lg:pt-0'>REVIEWS</h1>
        <h1 className='text-5xl font-bold mt-6'>What our customers said</h1>
        <p className='mt-6 mb-5 lg:mb-0'>Take a look at some customer reviews.</p>
      </div>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;