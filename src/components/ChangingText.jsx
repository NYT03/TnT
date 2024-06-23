import { useState, useEffect } from 'react';

function ChangingText() {
  const [data, setData] = useState({ title: '', text: '' });

  // Update data every 4 seconds
  useEffect(() => {
    const fetchData = async () => {
      // Replace this with your actual data fetching logic
      const title = 'Kailashnath Temple';
      const text = 'Located in India, the Kailashnath Temple is a cave temple that is carved out of a single rock. It is dedicated to the god Shiva and is considered to be one of the most sacred Hindu temples in the world.';
      setData({ title, text });
    };

    const interval = setInterval(fetchData, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" m-auto px-2 py-8 md:px-8 lg:px-16 relative border-solid border-2 border-black bg-[#ffffffa4] bg-blend-overlay">
      <h1 className="text-3xl font-bold text-left sm:text-4xl md:text-5xl">{data.title}</h1>
      <p className="text-lg text-gray-700 text-left mt-4 sm:text-xl md:text-2xl">{data.text}</p>
    </div>
  );
}

export default ChangingText;
