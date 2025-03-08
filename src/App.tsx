import Navbar from "./layouts/navbar";
import Benefits from "./sections/benefits";
import CoreProducts from "./sections/core-product";
import FlightLine from "./sections/flightline";
import Footer from "./sections/footer";
import Home from "./sections/home";
import Stats from "./sections/stats";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CoreProducts />
      <Benefits />
      <Stats />
      <FlightLine />
      <Footer />
    </>
  );
}

export default App;
