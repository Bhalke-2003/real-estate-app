import rentalImg from '../assets/images/house.jpg';
import sellImg from '../assets/images/apartment.jpg';
import rentImg from '../assets/images/office.jpg';
import builderImg from '../assets/images/builders.jpg';
import shopImg from '../assets/images/shop.jpg';


const services = [
  {
    id: 1,
    title: 'House/Appartment for Rent',
    description: 'Find tenants faster by listing your house or appartment for rent. Reach thousands of renters daily.',
    image: rentalImg
  },
  {
    id: 2,
    title: 'House/Appartment for Sale',
    description: 'Sell your residential property with ease. Connect with genuine buyers in your area.',
    image: sellImg,
  },
  {
    id: 3,
    title: 'BUILDER DETAILS',
    description: 'Explore trusted builders, their ongoing and past projects, ratings, and customer reviews.',
    image: builderImg,
  },
  {
    id: 4,
    title: 'Add Shop/Office for Rent',
    description: 'List your commercial space for rent and connect with growing businesses looking to expand.',
    image: rentImg,
  },
  {
    id: 5,
    title: 'Add Shop/Office for Sale',
    description: 'Sell your commercial property to interested business owners and investors with verified leads.',
    image: shopImg,
  }
];

export default services;
