import "./App.css";
import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import Movies from "./components/Movies.js";
import Footer from "./components/Footer.js";
import Newsletter from "./components/Newsletter.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <Movies />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
