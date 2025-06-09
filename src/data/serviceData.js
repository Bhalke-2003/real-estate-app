import rentalImg from '../assets/images/renting.png';
import sellImg from '../assets/images/sell.png';
import rentImg from '../assets/images/rent.png';
import builderImg from '../assets/images/builders.png';

const services = [
  {
    id: 1,
    title: "Add House for Rent",
    description: "Owners can list their property for rent.",
    icon: "🏠",
    image: rentalImg,
    link: "/postproperty?propertyType=For+Sale:+Houses+and+Apartments",
  },
  {
    id: 2,
    title: "Add House for Sale",
    description: "Owners can list their property for sale.",
    icon: "🏡",
    image: sellImg,
    link: "/postproperty?propertyType=For+Sale:+Houses+and+Apartments",
  },
  {
    id: 3,
    title: "Buy/ Rent house",
    description: "Browse available rental listings.",
    icon: "🔍",
    image: rentImg,
    link: "/rental",
  },
  {
    id: 4,
    title: "BUILDER DETAILS",
    description: "Information for property builders.",
    icon: "👷",
    image: builderImg,
    link: "/builder",
  }
];

export default services;
