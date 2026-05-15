

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import ClientLogos from  "./components/ClientLogos";
import Hero from  "./components/Hero"; 
import Navbar from "./components/Navbar";  



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ClientLogos />
      
      <Services />
      <About />
      <Work />
      <Contact />
      <Footer />
  
     
    </div>
  );
}

export default App;