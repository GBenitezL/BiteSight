import React  from 'react';
import Home from "./pages/home";
import FourOhFour from './pages/FourOhFour';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from './components/navbar';
import Footer from "./components/footer";

function App() {

  return (
    <div>
      <ResponsiveAppBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<FourOhFour/>} />
        </Routes>
		  </Router>
      <Footer/>
    </div>
  );
}

export default App;
