// App.js
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Athletic from './Pages/Athletic';
import Pricing from './Pages/Pricing';
import Customers from './Pages/Customers';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Comfort from './Pages/Comfort';
const App = () => {
 return (
    <>
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/athletic" element={<Athletic/>} />
          <Route path="/comfort" element={<Comfort/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

       </Routes>
    </>
 );
};

export default App;