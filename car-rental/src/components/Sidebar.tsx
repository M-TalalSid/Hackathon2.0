export default function Sidebar() {
    return (
      <aside className="w-full md:w-1/4 bg-white shadow-md p-6 rounded-lg">
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Type</h3>
          <ul className="space-y-2">
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
              <li key={type}>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-500" />
                  <span>{type} (10)</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Capacity</h3>
          <ul className="space-y-2">
            {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
              <li key={capacity}>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-500" />
                  <span>{capacity} (12)</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Price</h3>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full accent-blue-500"
          />
          <div className="text-gray-500 text-sm mt-2">Max: $100.00</div>
        </div>
      </aside>
    );
  }
  