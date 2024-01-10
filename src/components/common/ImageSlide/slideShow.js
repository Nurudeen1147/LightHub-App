import React, { useState, useEffect } from 'react';
import './slideShow.css'

const Slideshow = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow">
      <div className="slideshow__slide">
        <img src={images[currentIndex]} alt="Slideshow" />
      </div>
      <div className="slideshow__navigation">
        <button onClick={goToPreviousSlide}>&lt;</button>
        <ul className="slideshow__dots">
          {images.map((_, index) => (
            <li
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => goToSlide(index)}
            ></li>
          ))}
        </ul>
        <button onClick={goToNextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Slideshow;