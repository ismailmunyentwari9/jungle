/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Logo from './assets/media/logo.jpeg';

const Nav = () => (
  <div className="bg-gray-800 w-full   h-auto">
    <div className="container mx-auto  w-5/6 py-4  flex items-center justify-between md:gap-10">
      <div className="">
        <span className="text-orange-500"><img className="rounded-full w-[110px] h-[110px]" src={Logo} alt="logo" /></span>
      </div>
      <ul className="hidden lg:flex text-white text-lg gap-4 md:grid md:grid-cols-4">
        <li className="py-1 px-2 hover:bg-orange-400">Home</li>
        <li className="py-1 px-2 hover:bg-orange-400">Block</li>
        <li className="py-1 px-2 hover:bg-orange-400">Packages</li>
        <li className="py-1 px-2 hover:bg-orange-400">Serciveses</li>
        <li className="py-1 px-2 hover:bg-orange-400">Galley</li>
        <li className="py-1 px-2 hover:bg-orange-400">Review</li>
        <li className="py-1 px-2 hover:bg-orange-400">Contact</li>
      </ul>
      <div className="hidden lg:flex md:flex gap-4 text-white ">
        <span className="text-orange-500 fas fa-skiing-nordic">
          <i className="text-white"> Let's Plan</i>
        </span>
      </div>
      {/* Only show this on  mobile version */}
      <div className="lg:hidden md:hidden flex">
        <span className="fa fa-bars text-white text-lg" />
      </div>
    </div>
  </div>
);
export default Nav;
