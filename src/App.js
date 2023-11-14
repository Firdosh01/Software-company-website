import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import Careers from './components/Pages/Careers';

function App() {
  return (
    <div className='w-screen min-h-screen bg-img'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='/careers' element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
