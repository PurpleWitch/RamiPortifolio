import "./App.css";
import Displays from "./components/Displays";
import TopBar from "./components/TopBar";
import Icons from "./components/Icons";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Displays />
      <Icons />
      <TopBar />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Footer />
    </div>
  );
}

export default App;
