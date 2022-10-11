import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCom from "./components/NavbarCom";
import CarouselFade from "./components/CarouselFade/CarouselFade";
import MainCampaign from "./components/MainCampaign";
import BestProduct from "./components/BestProduct";

function App() {
  return (
    <div className="App">
      <NavbarCom />
      <CarouselFade />
      <MainCampaign />
      <BestProduct />
    </div>
  );
}

export default App;
