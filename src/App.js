import './App.css';
import { MainIntro } from './Components/MainIntro';
import { Navbar } from './Components/Navbar';
import Widget from 'rasa-webchat';




function App() {
  return (
    <div className="">
      <Navbar />
      <MainIntro />
      {/* <Widget
        initPayload={"/get_started"}
        socketUrl={"http://0.0.0.0:5005"}
        socketPath={"/socket.io/"}
        customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"Title"}
    /> */}
    </div>
  );
}

export default App;
