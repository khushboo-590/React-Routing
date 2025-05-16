import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm'; 
import Link2 from './components/Link2'; 
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/contact" element={<Contact />}>
          <Route path="contactform" element={<ContactForm />} />
          <Route path="link2" element={<Link2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
