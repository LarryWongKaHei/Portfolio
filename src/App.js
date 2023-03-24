import './App.css';
import { MainIntro } from './Components/MainIntro';
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Projects } from './Components/Projects';
import { HashRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <HashRouter className="">
      <Navbar />
      <Routes>
        <Route path='/portfolio' element={<MainIntro />} />
        <Route path='/about' element={<About />} className="about"/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
    </Routes>
    </HashRouter>
  );
}

export default App;
