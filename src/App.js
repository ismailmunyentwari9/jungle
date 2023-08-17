import './App.css';
import Nav from './components/navigation';
import Slideshow from './components/HomeSlides';
import Packages from './components/Packages';
import Services from './components/Services';
import Booking from './components/Booking';
import Garelly from './components/Garelly';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Slideshow />
      <Packages />
      <Services />
      <Booking />
      <Garelly />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
