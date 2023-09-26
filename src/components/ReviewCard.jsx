import { images } from '../assets';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col font-raleway'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={images.star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-4 text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;