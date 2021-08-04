import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="py-4 px-10 bg-white text-purple-500 my-3 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150">
          flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
