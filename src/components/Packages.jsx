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
            <span className="text-xl font-bold">1 Day Safari to Akagera national park</span>
          </p>
          <p>
            Akagera National Park has an inspiring
            conservation story as it is
            now home to the big five like
            lions and rhinos, and is the only Big-five Park in the country.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">from $250.00 per adult (price varies by group size)</span>
            <span className="text-red-300 line-through ml-2">$50.00</span>
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
            <span className="text-xl font-bold">Kigali City Tour</span>
          </p>
          <p>
            Being the best and cleanest city in Africa,
            touring Kigali will make you comfortable as
            a way to kick off your visit to Rwanda and
            most important experiencing the beauty of the entire country.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$150</span>
            <span className="text-red-300 line-through ml-2">$30.00</span>
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
            <span className="text-xl font-bold">6 Days Rwanda Wildlife Safari</span>
          </p>
          <p>
            Offers
            the opportunity to trek gorillas and
            golden monkeys at Volcanoes National
            Park in Rwanda before adding a half-city
            tour and one day in Akagera National Park
            home to a big five
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$2,544.00</span>
            <span className="text-red-300 ml-2 line-through">$120.00</span>
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
        <div className="flex flex-col mt-3">
          <p>
            <span className="fas fa-map-marker-alt text-orange-500 mr-2" />
            <span className="text-xl font-bold">2 Days Gorilla Trekking Safari in Uganda via Kigali</span>
          </p>
          <p>
            Trek gorillas to Uganda’s Bwindi
            Impenetrable Forest, from Kigali.
            Ground transfers, meals, and gorilla
            trekking permits are included, with
            campsite stays within the park at an additional cost.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$1, 600</span>
            <span className="text-red-300 ml-2 line-through">$150</span>
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
        <div className="flex flex-col mb-4">
          <p>
            <span className="fas fa-map-marker-alt text-orange-500 mr-2" />
            <span className="text-xl font-bold">3 days gorillas and golden monkeys trek Adventure</span>
          </p>
          <p>
            Gorillas and golden monkeys tracking as
            the prime adventure on this 3-day trip
            to the Volcanoes National Park Volcanoes
            National Park is Rwanda’s part of the Virunga Mountains .
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$2,350.00</span>
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
        <div className="flex flex-col mb-8">
          <p>
            <span className="fas fa-map-marker-alt text-orange-500 mr-2" />
            <span className="text-xl font-bold">2 Days Akagera Wildlife Safari Park </span>
          </p>
          <p>
            This is a unique experience of
            facing wildlife and it is a lifetime
            experience to see all the big five in their nurture
            Our guides are really friendly and efficient.
          </p>
          <p>
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="fas fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
            <i className="far fa-star text-orange-500" />
          </p>
          <p>
            <span className="text-lg font-bold">$920.00</span>
          </p>
          <button
            className="bg-orange-500  self-start text-white font-bold py-1 px-3 rounded-md hover:bg-orange-400 "
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
