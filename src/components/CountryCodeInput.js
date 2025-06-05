
// import React, { useState } from 'react';
// import { InputGroup, Form, Dropdown } from 'react-bootstrap';
// import 'flag-icon-css/css/flag-icon.min.css';

// const countries = [
//   { name: 'India', code: '+91', flag: 'in' },
//   { name: 'United States', code: '+1', flag: 'us' },
//   { name: 'United Kingdom', code: '+44', flag: 'gb' },
//   { name: 'Australia', code: '+61', flag: 'au' },
//   { name: 'Canada', code: '+1', flag: 'ca' },
// ];

// const CountryCodeInput = ({ mobile, setMobile }) => {
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);

//   const handleSelect = (code) => {
//     const country = countries.find(c => c.code === code);
//     setSelectedCountry(country);
//   };

//   return (
//     <InputGroup>
//       <Dropdown onSelect={handleSelect}>
//         <Dropdown.Toggle variant="outline-secondary">
//           <span className={`flag-icon flag-icon-${selectedCountry.flag}`} style={{ marginRight: '5px' }}></span>
//           {selectedCountry.code}
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           {countries.map((c, idx) => (
//             <Dropdown.Item key={idx} eventKey={c.code}>
//               <span className={`flag-icon flag-icon-${c.flag}`} style={{ marginRight: '5px' }}></span>
//               {c.name} ({c.code})
//             </Dropdown.Item>
//           ))}
//         </Dropdown.Menu>
//       </Dropdown>
//       <Form.Control
//         type="tel"
//         placeholder="Enter mobile number"
//         value={mobile}
//         onChange={(e) => setMobile(e.target.value)}
//       />
//     </InputGroup>
//   );
// };

// export default CountryCodeInput;
