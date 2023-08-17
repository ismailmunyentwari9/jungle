/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const slidesImages = [
  {
    url: 'https://i.gifer.com/7L35.gif',
  },
  {
    url: 'https://78.media.tumblr.com/984d390d3c2244fc54152df451017b68/tumblr_p0o4dth8St1wbxqk4o1_540.gif',
  },
  {
    url: 'https://media.tenor.com/5skqpqDytFkAAAAd/bull-moose-moose.gif',
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className=" w-full">
      <div className="w-full">
        <div
          className="w-full lg:h-[100vh] md:h-[60vh] bg-center bg-cover"
          style={{ backgroundImage: `url(${slidesImages[currentSlide].url})` }}
        >
          <div className="container mx-auto flex flex-col justify-center items-center lg:pt-[15%] md:pt-[10%]">
            <p className="lg:text-[45px] md:text-[25px] text-white font-bold text-center">
              {' '}
              ADVENTURE IS WOTHWHILE
            </p>
            <p className="text-center text-[15px] text-white font-bold">
              Discover New Places With Us, Adventure Awaits
            </p>
            <button
              type="button"
              className="bg-orange-500 text-white font-bold px-2 py-1 rounded-md lg:mt-5 "
            >
              Discover More
            </button>
          </div>
          <div className=" left-0 right-0 flex justify-center items-center space-x-4 pb-3 mt-[7%]">
            <div className="flex space-x-4 bg-gray-800 py-2 px-10 rounded-full">
              {slidesImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    index === currentSlide ? 'bg-orange-500' : 'bg-white'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Slideshow;
