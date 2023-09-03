/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import Akagera from './assets/media/akagera.mp4';

const Slideshow = () => (
  <div className=" w-full">
    <div className="w-full">
      <div
        className="w-full h-[100vh] bg-center bg-cover"
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: -1,
          }}
        >
          <source src={Akagera} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container mx-auto flex flex-col justify-center items-center pt-[15%]">
          <p className="lg:text-[45px] md:text-[25px] text-black font-bold text-center">
            {' '}
            ADVENTURE IS WOTHWHILE
          </p>
          <p className="lg:text-[20px] text-[15px] text-orange-800 font-bold lg:w-1/3 w-full   px-2">
            Discover New Places With Us, Where Every Journey Unveils a World of Excitement and Wonder. Embark on Adventures that Lead to Unforgettable Memories, and Embrace the Thrill of Exploring the Unknown. Your Next Epic Expedition Awaits, Ready to Ignite Your Passion for Discovery and Create Stories that Last a Lifetime.
          </p>
          <button
            type="button"
            className="bg-orange-500 text-white font-bold px-2 py-1 rounded-md lg:mt-5 "
          >
            Discover More
          </button>
        </div>
      </div>
    </div>

  </div>
);

export default Slideshow;
