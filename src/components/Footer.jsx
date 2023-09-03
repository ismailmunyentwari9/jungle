import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto">
      {/* Newsletter subscription */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-5/6 mx-auto">
        <span className="text-xl font-bold leading-9 text-white lg:mr-40">
          Join Jungle Trial Newsletter
        </span>
        <form className="flex w-full lg:w-2/5 pl-2 h-12 rounded border border-solid border-gray-800">
          <input
            className="outline-none w-full bg-transparent text-white placeholder-gray-400 text-sm font-normal leading-5"
            type="text"
            placeholder="Your Email Address..."
          />
          <button type="submit" className="rounded-sm text-white w-10 hover:bg-orange-500">
            <i className="fa fa-envelope" />
          </button>
        </form>
        <div className="contacts">
          <h4 className="font-medium text-lg leading-6 text-white">Follow us on:</h4>
          <p className="flex mt-3 gap-2 flex-wrap">
            {/* Replace "#" with actual social media links */}
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-whatsapp font-normal text-base  leading-6 text-gray-500" />
            </a>
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-instagram font-normal text-base  leading-6 text-gray-500" />
            </a>
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-twitter font-normal text-base leading-6 text-gray-500" />
            </a>
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-facebook font-normal text-base leading-6 text-gray-500" />
            </a>
            {/* Add more social media icons as needed */}
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-orange-500 w-5/6 mx-auto my-6" />

      {/* Footer sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-5/6 mx-auto mt-5">
        {/* Privacy Policy */}
        <div className="flex flex-col gap-1.5">
          <h4 className="font-medium text-lg leading-6 text-white">Privacy Policy</h4>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>Returns & Exchanges</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>Returns & Exchanges</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>Returns & Exchanges</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>Returns & Exchanges</span>
          </a>
          {/* Add more links as needed */}
        </div>

        {/* Get Involved */}
        <div className="flex flex-col gap-1.5">
          <h4 className="font-medium text-lg leading-6 text-white">Get Involved</h4>

          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>About Jungle trial</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>About Jungle trial</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>About Jungle trial</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>About Jungle trial</span>
          </a>
          {/* Add more links as needed */}
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-1.5">
          <h4 className="font-medium text-lg leading-6 text-white">Quick Links</h4>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>Akagera National Park</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>Akagera National Park</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>Akagera National Park</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>Akagera National Park</span>
          </a>
          {/* Add more links as needed */}
        </div>

        {/* Customer Care */}
        <div className="flex flex-col gap-1.5">
          <h4 className="font-medium text-lg leading-6 text-white">Customer Care</h4>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>My Account</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>My Account</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>My Account</span>
          </a>
          <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
            <span>Our Account</span>
          </a>
          {/* Add more links as needed */}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-orange-500 w-5/6 mx-auto mt-6" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-5/6 mx-auto mt-7 gap-12">
        {/* Logo */}
        <a href="#logo" className="lg:w-1/9 md:col-span-1">
          <span className="text-orange-500 lg:text-3xl text-lg">Jungle</span>
          <span className="lg:text-3xl text-lg text-white">Trail</span>
        </a>

        {/* Contact information */}
        <div className="footer-contacts flex gap-4 lg:w-1/9 md:col-span-1">
          <span>
            <i className="fas fa-skiing-nordic text-orange-500" />
          </span>
          <span>
            <p className="text-white font-medium leading-7 lg:text-2xl text-lg">+250 785 837 748</p>
          </span>
        </div>

        <div className="footer-contacts flex gap-4 lg:w-1/9 md:col-span-1">
          <span>
            <i className="text-orange-500 fa fa-plane text-2xl" />
          </span>
          <span>
            <p className="text-white">Amounts over $100</p>
          </span>
        </div>

        <div className="footer-contacts flex gap-4 lg:w-1/9 md:col-span-1">
          <span>
            <i className="text-orange-500 fa fa-money text-2xl" />
          </span>
          <span>
            <p className="text-white">Save up to 20%</p>
          </span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-orange-500 w-5/6 mx-auto mt-7" />

      {/* Copyright */}
      <div className="container mx-auto w-5/6 flex justify-between items-center mt-7">
        <div className="copyright-name font-medium text-xs leading-4 tracking-tight text-gray-600">
          <p>© 2023 Jungle Trial, ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
