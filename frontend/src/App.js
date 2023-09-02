import Header from "./components/Header";
import Home from "./components/Home";
import Motivation from "./components/Motivation";
import Footer from "./components/Footer";

function App() {
  return (
      <div className='bg-white min-h-screen min-w-screen'>
        <Header />
        <Home />
        <Motivation />
        <Footer />
      </div>
  );
}

export default App;
