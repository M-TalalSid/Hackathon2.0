export default function RecommendationCars() {

    const recommendedCars = [
      { name: "New Rush", price: "$72.00/day", image: "ANR.png", type: "SUV" },
      { name: "CR-V", price: "$80.00/day", image: "CRV.png", type: "SUV" },
      { name: "All New Terios", price: "$74.00/day", image: "ANT.png", type: "SUV" },
      { name: "MG ZX Excite", price: "$76.00/day", image: "MGZX.png", type: "Hatchback" },
      { name: "New MGZS", price: "$80.00/day", image: "MGZS.png", type: "SUV" },
      { name: "MG ZX Exclusive", price: "$74.00/day", image: "MG-ZX.png", type: "Hatchback" },
      { name: "CR-V", price: "$80.00/day", image: "CR-V.png", type: "SUV" },
      { name: "All New Rush", price: "$72.00/day", image: "ANR.png", type: "SUV" },
    ];

    return (
      <div className="p-6">
        <h2 className=" text-xl font-semibold mb-4">Recommended Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {recommendedCars.map((car, index) => (
            <div key={index} className="border rounded-md p-4 shadow-md">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-bold">{car.name}</h3>
              <p className="text-sm text-gray-500">{car.type}</p>
              <p className="mt-2 font-semibold">{car.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Rent Now
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md">
            Show More Cars
          </button>
        </div>
      </div>
    );
  }
  