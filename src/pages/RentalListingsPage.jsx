import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming backend API is set up
import RentalCard from "../components/RentalCard"; 
import FiltersSidebar from '../components/FiltersSidebar';


const RentalListingsPage = () => {
  const [rentals, setRentals] = useState([]);
  const [filters, setFilters] = useState({
    bhk: "",
    furnishing: "",
    rentRange: [0, 100000], // example range
  });

  useEffect(() => {
    // Fetch listings from backend (use your actual endpoint)
    axios.get("/api/rentals").then((res) => setRentals(res.data));
  }, []);

  // Apply filters (you can also do server-side filtering)
  const filteredRentals = rentals.filter((r) => {
    return (
      (!filters.bhk || r.bhk === filters.bhk) &&
      (!filters.furnishing || r.furnishing === filters.furnishing) &&
      r.rent >= filters.rentRange[0] &&
      r.rent <= filters.rentRange[1]
    );
  });

  return (
    <div className="container-fluid my-4">
      <div className="row">
        {/* Left Side: Filters */}
        <div className="col-md-3">
          <FiltersSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Right Side: Property Cards */}
        <div className="col-md-9">
          <h4 className="mb-3">Rental Properties</h4>
          {filteredRentals.length === 0 ? (
            <p>No listings found matching your criteria.</p>
          ) : (
            <div className="row g-3">
              {filteredRentals.map((property) => (
                <div className="col-md-6" key={property._id}>
                  <RentalCard data={property} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentalListingsPage;
