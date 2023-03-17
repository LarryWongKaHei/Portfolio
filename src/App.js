import './App.css';
import { MainIntro } from './Components/MainIntro';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <MainIntro />
    </div>
  );
}

export default App;
