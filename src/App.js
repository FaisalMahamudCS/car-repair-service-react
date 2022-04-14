import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/services' element={<Services></Services>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     
       <Route path='/register' element={<Register></Register>}></Route>
        {/* <Route path='/' element={}></Route>
       <Route path='/' element={}></Route>
       <Route path='/' element={}></Route>  */}
       
     </Routes>
    </div>
  );
}

export default App;
