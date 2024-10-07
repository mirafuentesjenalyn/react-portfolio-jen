import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="top-0 -z-10 h-full w-full overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-cyan-900">
      {/* <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div> */}

        <Navbar />
        <div id='home' className='bg-[#0f1726] min-h-screen'> <Home /> </div>
        <div id='about-me' className='bg-[#39275c]'> <About /> </div>
        <div className='bg-[#1f1f1f] pb-24'><Technologies /></div>
        <div className='bg-[#121016] pb-24'><Experience /></div>
        <div id='projects' className='bg-[#050c13] pb-24'> <Projects /> </div>
        <div id='contact'> <Contact /> </div>
      </div>

  );
};

export default App;