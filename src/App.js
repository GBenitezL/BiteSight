import React  from 'react';
import Home from "./pages/home";
import FourOhFour from './pages/FourOhFour';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Recommendations from './pages/Recommendations';
import CheckboxList from './pages/Form';
import Login from './pages/Login'; 

function App() {

  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>}/>
          <Route path='/recommendations' element={<Recommendations/>}/>
          <Route path='/preferences' element={<CheckboxList/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<FourOhFour/>} />
        </Routes>
		  </Router>
      <Footer/>
    </div>
  );
}

export default App;
