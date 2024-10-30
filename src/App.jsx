import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

const App = () => {
  return (
    <Router>
      <div className="top-0 -z-10 h-full w-full overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-cyan-900">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <div id='home' className='bg-[#0f1726] min-h-screen'><Home /></div>
              <div id='about-me' className='bg-[#39275c]'><About /></div>
              <div className='bg-[#1f1f1f] pb-24'><Technologies /></div>
              <div className='bg-[#121016] pb-24'><Experience /></div>
              <div id='projects' className='bg-[#050c13] pb-24'><Projects /></div>
              <div id='contact' className='bg-[#39275c]'><Contact /></div>
            </>
          } />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
