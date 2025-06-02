import React from 'react';

function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: '2 BHK Apartment in Pune',
      location: 'Kharadi, Pune',
      price: '₹45 Lakhs',
      image: 'https://via.placeholder.com/400x200?text=Property+1'
    },
    {
      id: 2,
      title: '3 BHK Villa in Mumbai',
      location: 'Andheri, Mumbai',
      price: '₹1.2 Crore',
      image: 'https://via.placeholder.com/400x200?text=Property+2'
    },
    {
      id: 3,
      title: '1 BHK Studio in Delhi',
      location: 'Saket, Delhi',
      price: '₹32 Lakhs',
      image: 'https://via.placeholder.com/400x200?text=Property+3'
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">Featured Properties</h2>
      <div className="row">
        {properties.map((prop) => (
          <div className="col-md-4 mb-4" key={prop.id}>
            <div className="card">
              <img src={prop.image} className="card-img-top" alt={prop.title} />
              <div className="card-body">
                <h5 className="card-title">{prop.title}</h5>
                <p className="card-text">{prop.location}</p>
                <p className="card-text"><strong>{prop.price}</strong></p>
                <a href="#" className="btn btn-outline-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProperties;
