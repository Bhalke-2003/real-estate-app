import rentalImg from '../assets/images/house.jpg';
import sellImg from '../assets/images/apartment.jpg';
import rentImg from '../assets/images/office.jpg';
import builderImg from '../assets/images/builders.jpg';
import shopImg from '../assets/images/shop.jpg';


const services = [
  {
    id: 1,
    title: 'House/Appartment for Rent',
    description: 'List your house or flat for rent',
    image: rentalImg,
  },
  {
    id: 2,
    title: 'House/Appartment for Sale',
    description: 'Sell your residential property quickly',
    image: sellImg,
  },
  {
    id: 3,
    title: 'BUILDER DETAILS',
    description: 'View trusted builder information',
    image: builderImg,
  },
  {
    id: 4,
    title: 'Add Shop/Office for Rent',
    description: 'List commercial space for rent',
    image: rentImg,
  },
  {
    id: 5,
    title: 'Add Shop/Office for Sale',
    description: 'Sell commercial property easily',
    image: shopImg,
  }
];

export default services;
