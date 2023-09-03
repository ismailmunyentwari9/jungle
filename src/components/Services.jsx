const Services = () => (
  <div className="container bg-white h-auto flex flex-col px-6">

    {/* Services we provide */}
    <div className="container  flex flex-col justify-center">
      <h2 className="flex gap-5 mt-[2%]  justify-center">
        <ul className="flex flex-wrap gap-1 lg:text-3xl text-lg">
          <li className="bg-orange-200 text-orange-500 px-3  rounded">S</li>
          <li className="bg-orange-200 text-orange-500 px-3  rounded">E</li>
          <li className="bg-orange-200 text-orange-500 px-3  rounded">R</li>
          <li className="bg-orange-200 text-orange-500 px-3  rounded">V</li>
          <li className="bg-orange-200 text-orange-500 px-3  rounded">I</li>
          <li className="bg-orange-200 text-orange-500 px-3  rounded">C</li>
          <li className="bg-orange-200 text-orange-500 px-3  rounded">E</li>
          <li className="bg-orange-200 text-orange-500 px-3  rounded">S</li>
        </ul>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-5/6 gap-14 mt-5">
        {/* service 00_1 */}
        <div className="col-span-1 flex flex-col justify-center bg-white shadow-xl p-2 mt-4 shadow-gray-300 transform transition-transform hover:scale-105">
          <p className="flex justify-center">
            <i className="fas fa-suitcase text-orange-500 text-[45px] mb-2" />
          </p>
          <p className="text-lg font-bold text-center mb-2">
            Affordable House
          </p>
          <p className="flex justify-center text-center font-bold-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorem at similique incidunt? Labore dolorum beatae nemo
            libero, voluptate sint! Sunt itaque
          </p>
        </div>
        {/* service 00_2 */}
        <div className="col-span-1 flex flex-col justify-center bg-white shadow-xl p-2 mt-4 shadow-gray-300 transform transition-transform hover:scale-105">
          <p className="flex justify-center">
            <i className="fas fa-utensils text-orange-500 text-[45px] mb-2" />
          </p>
          <p className="text-lg font-bold text-center mb-2">
            Food And Drinks
          </p>
          <p className="flex justify-center text-center font-bold-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorem at similique incidunt? Labore dolorum beatae nemo
            libero, voluptate sint! Sunt itaque
          </p>
        </div>
        {/* service 00_3 */}
        <div className="col-span-1 flex flex-col justify-center bg-white shadow-xl p-2 mt-4 shadow-gray-300 transform transition-transform hover:scale-105">
          <p className="flex justify-center">
            <i className="fas fa-user-secret text-orange-500 text-[45px] mb-2" />
          </p>
          <p className="text-lg font-bold text-center mb-2">Safety Guide</p>
          <p className="flex justify-center text-center font-bold-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorem at similique incidunt? Labore dolorum beatae nemo
            libero, voluptate sint! Sunt itaque
          </p>
        </div>

        {/* service 00_4 */}
        <div className="col-span-1 flex flex-col justify-center bg-white shadow-xl p-2 mt-4 shadow-gray-300 transform transition-transform hover:scale-105">
          <p className="flex justify-center">
            <i className="fa fa-globe text-orange-500 text-[45px] mb-2" />
          </p>
          <p className="text-lg font-bold text-center mb-2">
            Around the world
          </p>
          <p className="flex justify-center text-center font-bold-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorem at similique incidunt? Labore dolorum beatae nemo
            libero, voluptate sint! Sunt itaque
          </p>
        </div>
        {/* service 00_5 */}
        <div className="col-span-1 flex flex-col justify-center bg-white shadow-xl p-2 mt-4 shadow-gray-300 transform transition-transform hover:scale-105">
          <p className="flex justify-center">
            <i className="fa fa-plane text-orange-500 text-[45px] mb-2" />
          </p>
          <p className="text-lg font-bold text-center mb-2">
            Fatest Travel
          </p>
          <p className="flex justify-center text-center font-bold-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorem at similique incidunt? Labore dolorum beatae nemo
            libero, voluptate sint! Sunt itaque
          </p>
        </div>
        {/* service 00_6 */}
        <div className="col-span-1 flex flex-col justify-center bg-white shadow-xl p-2 mt-4 shadow-gray-300 transform transition-transform hover:scale-105">
          <p className="flex justify-center">
            <i className="fas fa-skiing-nordic text-orange-500 text-[45px] mb-2" />
          </p>
          <p className="text-lg font-bold text-center mb-2">Adventure</p>
          <p className="flex justify-center text-center font-bold-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorem at similique incidunt? Labore dolorum beatae nemo
            libero, voluptate sint! Sunt itaque
          </p>
        </div>
        <div />
      </div>
    </div>
  </div>
);
export default Services;
