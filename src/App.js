
import './App.css';
import About from './App/About';
import Contact from './App/Contact';
import Course from './App/Course';
import Hero from './App/Hero';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero/>
       <About/>
       <Course/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
