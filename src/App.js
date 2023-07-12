// App.js
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Tshirt from './Pages/Tshirt';
import Pricing from './Pages/Pricing';
import Customers from './Pages/Customers';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tshirts" element={<Tshirt/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

       </Routes>
    </>
 );
};

export default App;