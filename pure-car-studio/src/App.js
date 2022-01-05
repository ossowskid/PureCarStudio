import "./App.css";
import { Accomplishment } from "./Components/Accomplishment";
import { HeaderMenu } from "./Components/Header";
import { Home } from "./Components/Home";
import { Contact } from "./Components/sliderImages/Contact";

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Home />
      <Accomplishment />
      <Contact />
    </div>
  );
}

export default App;
