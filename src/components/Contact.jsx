/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Contact = () => (
  <div className="container mx-auto w-5/6 full my-10">
    <h2 className="flex gap-5 mt-[2%]  justify-center">
      <ul className="flex flex-wrap gap-1 lg:text-3xl text-lg">
        <li className="bg-orange-200 text-orange-500 px-3  rounded">C</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">O</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">C</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">T</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">A</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">C</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">T</li>

      </ul>

    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between mt-10">
      <div>
        <img src="https://kit8.net/wp-content/uploads/edd/2022/01/TRVL_around_the_planet_preview.jpg" alt="travel contacts" />
      </div>
      <div>
        <form className="shadow-lg rounded-lg p-4 bg-white">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input placeholder="John Doe" type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-orange-300" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input placeholder="john.doe@example.com" type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-orange-300" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="contacts" className="block text-gray-700">Contacts:</label>
              <input placeholder="Phone number or other contact info" type="text" id="contacts" name="contacts" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-orange-300" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700">Subject:</label>
              <input placeholder="Subject of your message" type="text" id="subject" name="subject" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-orange-300" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message:</label>
            <textarea placeholder="Say Something here..." id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-orange-300" />
          </div>
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
