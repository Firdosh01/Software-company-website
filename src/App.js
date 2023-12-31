import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import Careers from './components/Pages/Careers';
import Footer from './components/common/Footer';
import WebsiteDesigning from './components/Pages/WebsiteDesigning';
import Internship from './components/Pages/Internship';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <div className='w-screen min-h-screen bg-img'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='careers' element={<Careers />} />
        <Route path='internship' element={<Internship />} />
        <Route path='website-designing' element={<WebsiteDesigning />} />
        <Route path='contact-us'  element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
