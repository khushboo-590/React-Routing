import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Link2 from './components/Link2';
import NotFound from './components/NotFound';



import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-img.jpeg')] min-h-screen w-full bg-cover bg-center">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about/*" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="contactform" element={<ContactForm />} />
            <Route path="link2" element={<Link2 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
