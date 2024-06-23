import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/HomeImages.css';
function HomeImages({ imagePaths,margin }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [imagePaths.length]);
  const getMarginStyles = () => {
    let marginStyle = 'm-20';

    if (margin) {
      marginStyle = margin;
    }

    return marginStyle;
  };
  
  const baseUrl = 'src/components/';
  const images = imagePaths.map((imagePath) => `${baseUrl}${imagePath}`);

  return (
    <img src={images[currentIndex]} alt="Image Slider" className={`resize object-cover rounded-xl shadow-[_10px_10px_10px_rgba(0,0,0,0.4)] drop-shadow-xl max-w-2xl max-h-2xl ${getMarginStyles()}`}/>
  );
}

HomeImages.propTypes = {
  imagePaths: PropTypes.arrayOf(PropTypes.string).isRequired,
  margin: PropTypes.string,
};

export default HomeImages;
