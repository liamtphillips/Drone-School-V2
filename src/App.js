import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Landing from './pages/landing';
import Lessons from './pages/lessons';
import Contact from './pages/contact';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='bg-slate-200'>
        <div className='sticky top-0 z-20 '>
        <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
