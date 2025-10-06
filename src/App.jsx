import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects"
import EmailBox from "./components/EmailBox";
import Footer from "./components/Footer";

export default function App() {
  

  return (
    <div>
    <div className="bg-gray-950 text-white font-sans scroll-smooth">

      {/* Navbar */}
      <Navbar/>

      {/* Hero*/}
      <Hero/>

      {/* About*/}
      <About/>

      {/* Projects*/}
      <Projects/>

      {/* Email*/}
      <EmailBox/>

      {/* Footer */}
      <Footer/>
    </div>
    </div>
  );
}
