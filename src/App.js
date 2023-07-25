// App.js
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Tshirt from './Pages/Tshirt';
import Pricing from './Pages/Pricing';
import Customers from './Pages/Customers';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Crewneck from './Pages/Crewnecks';
import Hoodie from './Pages/Hoodies';
const App = () => {
 return (
    <>
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tshirts" element={<Tshirt/>} />
          <Route path="/crewnecks" element={<Crewneck/>} />
          <Route path="/hoodies" element={<Hoodie/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

       </Routes>
    </>
 );
};

export default App;