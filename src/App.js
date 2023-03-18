import './App.css';
import { MainIntro } from './Components/MainIntro';
import { Navbar } from './Components/Navbar';
import Widget from 'rasa-webchat';
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
        {/* <Widget
          initPayload={"/get_started"}
          socketUrl={"http://0.0.0.0:5005"}
          socketPath={"/socket.io/"}
          customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
          title={"Title"}
      /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
