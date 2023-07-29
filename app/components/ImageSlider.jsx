import React, { useState } from 'react';

const ImageSlider = ({ images, captions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div style={{ width: '100%', height: '240px', position: 'relative', overflow: 'hidden', padding: '0 2rem' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: `${(index - currentSlide) * 100}%`,
            transition: 'left 0.5s ease',
            padding: '0 2rem',
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <p
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.7)',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '14px',
              zIndex: 1,
            }}
          >
            {captions[index]}
          </p>
        </div>
      ))}
      <button
        onClick={handlePrevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '5px',
          transform: 'translateY(-50%)',
          zIndex: 2,
          fontSize: '2rem',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#fff',
        }}
      >
        &#8249; {/* Left arrow */}
      </button>
      <button
        onClick={handleNextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '5px',
          transform: 'translateY(-50%)',
          zIndex: 2,
          fontSize: '2rem',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#fff',
        }}
      >
        &#8250; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ImageSlider;
