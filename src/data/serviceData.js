// src/data/serviceData.js

import rentalImg from '../assets/images/rental.jpg';
import ownerImg from '../assets/images/kitchen.jpg';
import builderImg from '../assets/images/hall2.jpg';

const services = [
  {
    id: 1,
    title: 'RENTAL',
    description: 'Browse properties available for rent in your area.',
    image: rentalImg,
    link: '/rental', // ✅ Must match a route in App.js
  },
  {
    id: 2,
    title: 'OWNER DETAILS',
    description: 'Post your property and get seen by potential buyers.',
    image: ownerImg,
    link: '/postproperty?propertyType=For+Sale:+Houses+and+Apartments',
  },
  {
    id: 3,
    title: 'BUILDER DETAILS',
    description: 'View verified builders and their best projects.',
    image: builderImg,
    link: '/builder',
  },
];

export default services;