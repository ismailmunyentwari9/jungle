/* eslint-disable react/jsx-key */
const GarellyImages = [
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6KRwvQBQtescrTWc9roPHke91xvC_6dtSg&usqp=CAU' },
  { url: 'https://cms.forbesafrica.com/wp-content/uploads/2022/06/IMG_4306-scaled.jpg' },
  { url: ' https://images.blacktomato.com/2020/07/WEB-Camp-Arrival.jpg?auto=compress%2Cformat&fit=crop&h=424&ixlib=php-3.3.1&w=722&s=7c890ad8c00a6771033cf6aba7525c07' },
  { url: 'https://www.akageranationalparkrwanda.org/wp-content/uploads/2020/09/Magashi-Tented-Camps.jpg' },
  { url: 'https://cf.bstatic.com/xdata/images/hotel/max500/329061176.jpg?k=c63cbc18be1d147fc4fdacad2a1725f9a2cdaad2f01957e54af31919ec63561a&o=&hp=1' },
  { url: 'https://www.akageranationalparkrwanda.org/wp-content/uploads/2022/01/Akagera-national-park-game-drives.jpg' },
];
const Garelly = () => (
  <div className="container w-5/6 mx-auto flex flex-col">
    <h2 className="flex gap-5 mt-[2%]  justify-center">
      <ul className="flex gap-1 text-3xl">
        <li className="bg-orange-200 text-orange-500 px-3  rounded">G</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">A</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">R</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">E</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">L</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">L</li>
        <li className="bg-orange-200 text-orange-500 px-3  rounded">Y</li>

      </ul>

    </h2>
    <div className="grid grid-cols-3 gap-3 mt-6  ">
      {GarellyImages.map((items) => (
        <div className="col-span-1 ">
          <img src={items.url} className="w-full h-full rounded-t-lg transform transition-transform hover:scale-105" alt="Garelly Icon" />
        </div>
      ))}
    </div>
  </div>
);
export default Garelly;
