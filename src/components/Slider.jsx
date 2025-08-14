import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {images.map((img, i) => (
        <img key={i} src={img} alt={`slide ${i}`} className={i === index ? 'slide active' : 'slide'} />
      ))}
    </div>
  );
};

export default Slider;
