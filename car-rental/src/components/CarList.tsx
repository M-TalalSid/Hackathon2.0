import Image from "next/image";

export default function CarList() {

    const cars = [
        {
          name: "Koenigsegg",
          price: "$99.00/day",
          fuel: "90L",
          capacity: "2 People",
          type: "Sport",
          image: "car1.png",
        },
        {
          name: "Nissan GT-R",
          price: "$80.00/day",
          fuel: "80L",
          capacity: "2 People",
          type: "Sport",
          image: "car2.png",
        },
        // Add more cars as needed
      ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <Image
              src={car.image}
              alt={car.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.type}</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
              <span>⛽ {car.fuel}</span>
              <span>👥 {car.capacity}</span>
            </div>
            <p className="text-lg font-semibold mt-2">{car.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
              Rent Now
            </button>
          </div>
        ))}
        <div className="col-span-full flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
            Show More Cars
          </button>
        </div>
      </div>
    );
  }
  