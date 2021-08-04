import React from 'react';
import Image from 'next/image';

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300">
      <div className="relative h-80 w-80 ease-out">
        <Image layout="fill" src={img} className="" className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
};

export default MediumCard;
