export default function PopularCars() {
  const cars = [
    { name: "Koenigsegg", price: "$99.00/day", image: "koenigsegg.png" },
    { name: "Nissan GT-R", price: "$85.00/day", image: "NissanGT-R.png" },
    { name: "Rolls-Royce", price: "$90.00/day", image: "Rolls-Royce.png" },
    { name: "Nissan GTR", price: "$85.00/day", image: "NissanGTR.png" },
    // Add more cars...
  ];

  return (
    <div className="p-6">
      <h2 className="flex text-xl font-semibold mb-4">Popular Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {cars.map((car) => (
          <div key={car.name} className="border rounded-md p-4 shadow-md">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-32 object-cover"
            />
            <h3 className="mt-2 text-lg font-bold">{car.name}</h3>
            <p>{car.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
