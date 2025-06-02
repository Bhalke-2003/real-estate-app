import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryLocation = queryParams.get('location')?.toLowerCase();
  const queryType = queryParams.get('type')?.toLowerCase();

  const properties = [
    {
      id: 1,
      title: '2 BHK Apartment in Pune',
      location: 'Pune',
      type: 'apartment',
      price: '₹45 Lakhs',
      image: 'https://via.placeholder.com/400x200?text=Property+1'
    },
    {
      id: 2,
      title: '3 BHK Villa in Mumbai',
      location: 'Mumbai',
      type: 'villa',
      price: '₹1.2 Crore',
      image: 'https://via.placeholder.com/400x200?text=Property+2'
    },
    {
      id: 3,
      title: '1 BHK Flat in Delhi',
      location: 'Delhi',
      type: 'flat',
      price: '₹32 Lakhs',
      image: 'https://via.placeholder.com/400x200?text=Property+3'
    }
  ];

  const filtered = properties.filter(
    (prop) =>
      (!queryLocation || prop.location.toLowerCase().includes(queryLocation)) &&
      (!queryType || prop.type.toLowerCase() === queryType)
  );

  return (
    <div className="container my-5">
      <h3 className="mb-4">Search Results</h3>
      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((prop) => (
            <div className="col-md-4 mb-4" key={prop.id}>
              <div className="card">
                <img src={prop.image} className="card-img-top" alt={prop.title} />
                <div className="card-body">
                  <h5 className="card-title">{prop.title}</h5>
                  <p className="card-text">{prop.location}</p>
                  <p className="card-text"><strong>{prop.price}</strong></p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No properties match your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
