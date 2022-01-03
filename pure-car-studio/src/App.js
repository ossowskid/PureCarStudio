import "./App.css";
import { Accomplishment } from "./Components/Accomplishment";
import { HeaderMenu } from "./Components/Header";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Home />
      <Accomplishment />
    </div>
  );
}

export default App;
