import './App.css';
import { MainIntro } from './Components/MainIntro';
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Projects } from './Components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainIntro />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
