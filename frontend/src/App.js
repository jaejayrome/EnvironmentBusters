import Header from "./components/Header";
import Home from "./components/Home";
import Motivation from "./components/Motivation";
import Footer from "./components/Footer"; 
import Demo from "./components/Demo";
import Conclusion from "./components/Conclusion";
import Automated from "./components/Automated";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
      <div className='bg-white min-h-screen min-w-screen'>
        <Header />
        <Home />
        <Motivation />
        <HowItWorks/>
        <Demo/>
        <Automated />
        <Conclusion />
        <Footer />
      </div>
  );
}

export default App;
