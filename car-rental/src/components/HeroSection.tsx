import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <div className="bg-blue-500 text-white p-6 rounded-md">
        <img src="Koenigsegg.png" className="w-1/2 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">
          The Best Platform for Car Rental
        </h2>
        <p>
          Ease of doing a car rental safely and reliably, of course at a low
          price.
        </p>
        <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-md">
          Rental Car
        </button>
      </div>
      <div className="bg-blue-400 text-white p-6 rounded-md">
        <img src="NissanGTR.png" className="w-1/2 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">
          Easy way to rent a car at a low price
        </h2>
        <p>
          Providing cheap car rental services and safe and comfortable
          facilities.
        </p>
        <button className="mt-4 bg-white text-blue-400 px-4 py-2 rounded-md">
          Rental Car
        </button>
      </div>
    </div>
  );
}
