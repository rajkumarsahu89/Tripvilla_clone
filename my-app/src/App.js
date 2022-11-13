
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Search from './Components/Search';
import HomePage from './Components/HomePage';
import Carousal_HomePage from './Components/Carousal_HomePage';
import AllRoutes from './AllRouts';

function App() {
  return (
    <div className="App">
     <Navbar/>
    
     
     {/* <Search/> */}
     {/* <Carousal_HomePage/> */}
    
     <AllRoutes/>
     <Footer/>

    </div>
  );
}

export default App;
