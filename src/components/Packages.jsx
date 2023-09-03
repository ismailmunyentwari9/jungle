const Packages = () => (

  <div className="container bg-white h-auto flex flex-col px-6">
    {/* packages section */}
    <h2 className="flex gap-5 mt-[2%] self-center">
      <ul className="flex flex-wrap gap-1 lg:text-3xl text-lg">
        <li className="bg-orange-200 text-orange-500 px-3  rounded">P</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">A</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">C</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">K</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">A</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">G</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">E</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">S</li>
      </ul>
    </h2>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-5/6 container mx-auto mt-[3%]">
      {/* packages cards 001 */}
      <div className="shadow p-4 cursor-pointer transform transition-transform hover:scale-105 col-span-1  hover:border-orange-500 border-2 group flex flex-col justify-between py-2 px-3 border-solid border-gray-300 bg-white rounded-lg mb-4">
        <div>
          <img
            className="rounded-t-lg"
            src="https://www.akageranationalparkrwanda.org/wp-content/uploads/2019/12/Game-Drives-in-Akagera-National-Parks-750x374.jpg"
            alt="packages"
          />
        </div>
        <div className="flex flex-col group">
          <p>
            <span className="fas fa-map-marker-alt text-orange-500 mr-2" />
            <span className="text-xl font-bold">Akagera</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            incidunt, ab recusandae a eligendi ipsa, maiores voluptatem
            dolore quidem ullam, repellendus error ut deleniti facilis
            voluptatibus rerum officiis cum nihil.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$90.00</span>
            <span className="text-gray-300 line-through">$120.00</span>
          </p>
          <button
            className="bg-orange-500 self-start text-white font-bold py-1 px-3 rounded-md hover:bg-orange-400 "
            type="submit"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* packages cards 002 */}
      <div className="shadow p-4 cursor-pointer transform transition-transform hover:scale-105 col-span-1  hover:border-orange-500 group flex flex-col justify-between py-2 px-3 border-2 border-solid border-gray-300 bg-white rounded-lg mb-4">
        <div>
          <img
            className="rounded-t-lg"
            src="https://www.akageranationalparkrwanda.org/wp-content/uploads/2019/12/Game-Drives-in-Akagera-National-Parks-750x374.jpg"
            alt="packages"
          />
        </div>
        <div className="flex flex-col">
          <p>
            <span className="fas fa-map-marker-alt text-orange-500 mr-2" />
            <span className="text-xl font-bold">Akagera</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            incidunt, ab recusandae a eligendi ipsa, maiores voluptatem
            dolore quidem ullam, repellendus error ut deleniti facilis
            voluptatibus rerum officiis cum nihil.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$90.00</span>
            <span className="text-gray-300 line-through">$120.00</span>
          </p>
          <button
            className="bg-orange-500 self-start text-white font-bold py-1 px-3 rounded-md hover:bg-orange-400 "
            type="submit"
          >
            Book Now
          </button>
        </div>
      </div>
      {/* packages cards 003 */}
      <div className=" shadow p-4 cursor-pointer transform transition-transform hover:scale-105 col-span-1  hover:border-orange-500 group flex flex-col justify-between py-2 px-3 border-2 border-solid border-gray-300 bg-white rounded-lg mb-4">
        <div>
          <img
            className="rounded-t-lg"
            src="https://www.akageranationalparkrwanda.org/wp-content/uploads/2019/12/Game-Drives-in-Akagera-National-Parks-750x374.jpg"
            alt="packages"
          />
        </div>
        <div className="flex flex-col">
          <p>
            <span className="fas fa-map-marker-alt text-orange-500 mr-2" />
            <span className="text-xl font-bold">Akagera</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            incidunt, ab recusandae a eligendi ipsa, maiores voluptatem
            dolore quidem ullam, repellendus error ut deleniti facilis
            voluptatibus rerum officiis cum nihil.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$90.00</span>
            <span className="text-gray-300 line-through">$120.00</span>
          </p>
          <button
            className="bg-orange-500 self-start text-white font-bold py-1 px-3 rounded-md hover:bg-orange-400 "
            type="submit"
          >
            Book Now
          </button>
        </div>
      </div>
      {/* packages cards 003 */}
      <div className=" shadow p-4 cursor-pointer transform transition-transform hover:scale-105 col-span-1  hover:border-orange-500 group flex flex-col justify-between py-2 px-3 border-2 border-solid border-gray-300 bg-white rounded-lg mb-4">
        <div>
          <img
            className="rounded-t-lg"
            src="https://www.akageranationalparkrwanda.org/wp-content/uploads/2019/12/Game-Drives-in-Akagera-National-Parks-750x374.jpg"
            alt="packages"
          />
        </div>
        <div className="flex flex-col">
          <p>
            <span className="fas fa-map-marker-alt text-orange-500 mr-2" />
            <span className="text-xl font-bold">Akagera</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            incidunt, ab recusandae a eligendi ipsa, maiores voluptatem
            dolore quidem ullam, repellendus error ut deleniti facilis
            voluptatibus rerum officiis cum nihil.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$90.00</span>
            <span className="text-gray-300 line-through">$120.00</span>
          </p>
          <button
            className="bg-orange-500 self-start text-white font-bold py-1 px-3 rounded-md hover:bg-orange-400 "
            type="submit"
          >
            Book Now
          </button>
        </div>
      </div>
      {/* packages cards 005 */}
      <div className=" shadow p-4 cursor-pointer transform transition-transform hover:scale-105 col-span-1  hover:border-orange-500 group flex flex-col justify-between py-2 px-3 border-2 border-solid border-gray-300 bg-white rounded-lg mb-4">
        <div>
          <img
            className="rounded-t-lg"
            src="https://www.akageranationalparkrwanda.org/wp-content/uploads/2019/12/Game-Drives-in-Akagera-National-Parks-750x374.jpg"
            alt="packages"
          />
        </div>
        <div className="flex flex-col">
          <p>
            <span className="fas fa-map-marker-alt text-orange-500 mr-2" />
            <span className="text-xl font-bold">Akagera</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            incidunt, ab recusandae a eligendi ipsa, maiores voluptatem
            dolore quidem ullam, repellendus error ut deleniti facilis
            voluptatibus rerum officiis cum nihil.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$90.00</span>
            <span className="text-gray-300 line-through">$120.00</span>
          </p>
          <button
            className="bg-orange-500 self-start text-white font-bold py-1 px-3 rounded-md hover:bg-orange-400 "
            type="submit"
          >
            Book Now
          </button>
        </div>
      </div>
      {/* packages cards 006 */}
      <div className=" shadow p-4 cursor-pointer transform transition-transform hover:scale-105 col-span-1 hover:border-orange-500 group flex flex-col justify-between py-2 px-3 border-2 border-solid border-gray-300 bg-white rounded-lg mb-4">
        <div>
          <img
            className="rounded-t-lg"
            src="https://www.akageranationalparkrwanda.org/wp-content/uploads/2019/12/Game-Drives-in-Akagera-National-Parks-750x374.jpg"
            alt="packages"
          />
        </div>
        <div className="flex flex-col">
          <p>
            <span className="fas fa-map-marker-alt text-orange-500 mr-2" />
            <span className="text-xl font-bold">Akagera</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            incidunt, ab recusandae a eligendi ipsa, maiores voluptatem
            dolore quidem ullam, repellendus error ut deleniti facilis
            voluptatibus rerum officiis cum nihil.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$90.00</span>
            <span className="text-gray-300 line-through">$120.00</span>
          </p>
          <button
            className="bg-orange-500 self-start text-white font-bold py-1 px-3 rounded-md hover:bg-orange-400 "
            type="submit"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default Packages;
