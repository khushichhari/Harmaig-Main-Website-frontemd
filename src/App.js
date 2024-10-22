import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer'; // Footer component
import AboutUs from './foot/AboutUs';
import KnowUs from './foot/KnowUs';
import ContactUs from './foot/ContactUs';
import Returns from './foot/Returns';
import Exchange from './foot/Exchange';
import TermsConditions from './foot/TermsConditions';
import Personalisation from './foot/Personalisation';
import Art from './foot/Art';
import Lending from './foot/Lending';
import GPR from './foot/GPR';
import FAQ from './foot/FAQ';


const App = () => {
  return (
    <>
    <Router>
    <Home />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/know-us" element={<KnowUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/personalisation" element={<Personalisation />} />
          <Route path="/art" element={<Art />} />
          <Route path="/lending" element={<Lending />} />
          <Route path="/gpr" element={<GPR />} />
          <Route path="/faqs" element={<FAQ/>} />
        </Routes>
        <Footer />
    </Router>
    </>
  );
};

export default App;


