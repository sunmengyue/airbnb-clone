import React from 'react';
import Image from 'next/image';

const SmallCard = ({ item }) => {
  return (
    <div className="flex m-2 mt-5 items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-16 h-16">
        <Image src={item.img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{item.location}</h2>
        <h3 className="text-gray-500">{item.distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
