import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
    <div className=''>
      <div className=''>
          <Header/>
          <AboutUs/>
          <Achievements/>
          <WhyUs/>
          <Services/>

          <Footer />
      </div>
    </div>
      
    </>
    
  )
}

export default App;
