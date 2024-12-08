import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FilterSection from "./components/FilterSection";
import CarList from "./components/CarList";
import Footer from "./components/Footer";

export default function CarsPage() {
  return (
    <div>
      <Header />
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <Sidebar />
        <div className="col-span-3 space-y-6">
          <FilterSection />
          <CarList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
