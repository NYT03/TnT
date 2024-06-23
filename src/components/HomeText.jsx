import React, { useEffect, useState } from 'react';

function HomeText({ templeData=[] }) {
  const [currentTemple, setCurrentTemple] = useState(0);

  useEffect(() => {
    console.log('running')
    const intervalId = setInterval(() => {
      setCurrentTemple((prevIndex) => (prevIndex + 1) % templeData.length);
    }, 4000);

    return () => clearInterval(intervalId);
  },);

  const { title, description } = templeData[currentTemple];

  return (
    <div className=" m-auto px-2 py-8 md:px-8 lg:px-16 relative border-solid border-2 border-black bg-[#ffffffa4] bg-blend-overlay">
      <p className="text-3xl font-bold text-left sm:text-4xl md:text-5xl">{title}</p>
      <p className="text-lg text-gray-700 text-left mt-4 sm:text-xl md:text-2xl">{description}</p>
    </div>
  );
}

export default HomeText;
