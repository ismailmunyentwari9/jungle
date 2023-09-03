/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Booking = () => (
  <div>
    {/* Booking section */}
    <div className="container bg-white h-auto flex flex-col px-6">
      <h2 className="flex flex-wrap lg:gap-10 md:gap-10 gap-4 mt-[2%] self-center">
        <ul className="flex gap-1 lg:text-3xl text-lg">
          <li className="bg-orange-200 text-orange-500 px-3 rounded">B</li>
          <li className="bg-orange-200 text-orange-500 px-3 rounded">O</li>
          <li className="bg-orange-200 text-orange-500 px-3 rounded">O</li>
          <li className="bg-orange-200 text-orange-500 px-3 rounded">K</li>
        </ul>
        <ul className="flex gap-1 lg:text-3xl text-lg">
          <li className="bg-orange-200 text-orange-500 px-3 rounded">N</li>
          <li className="bg-orange-200 text-orange-500 px-3 rounded">O</li>
          <li className="bg-orange-200 text-orange-500 px-3 rounded">W</li>
        </ul>
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-[3%]">
        <div className="col-span-1">
          <form className="flex flex-col gap-4 mt-[6%] border border-solid border-gray-400 p-2 rounded-md">
            <label className="text-xl font-bold" htmlFor="destination">Destination</label>
            <input
              type="text"
              placeholder="Place To Visit"
              name="destination"
              className="px-4 py-2 border rounded"
            />

            <label className="text-xl font-bold" htmlFor="numOfVisitors">How Many</label>
            <input
              type="number"
              placeholder="Number Of visitors"
              name="numOfVisitors"
              className="px-4 py-2 border rounded"
            />

            <label className="text-xl font-bold" htmlFor="arrivalDate">Arrivals</label>
            <input
              type="date"
              name="arrivalDate"
              className="px-4 py-2 border rounded"
            />

            <label className="text-xl font-bold" htmlFor="departureDate">Leaving</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              className="px-4 py-2 border rounded"
            />

            <button className="bg-orange-500 self-start text-white font-bold py-1 px-3 rounded-md hover:bg-orange-400" type="submit">Book Now</button>
          </form>
        </div>
        <div className="col-span-1">
          <img src="https://img.freepik.com/free-vector/girl-with-travelling-objects-white-background_1308-87230.jpg" alt="Trip" />
        </div>
      </div>
    </div>
  </div>
);

export default Booking;
