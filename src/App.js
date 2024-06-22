
import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Headder } from './Components/Headder';
import { Login } from './Pages/Login';
import Home from './Pages/Home';
import UploadM3U from './Pages/UploadM3U';
import Dashboard from './Pages/Dashboard';
import ServicesPage from './Pages/Services';
import AddFoodItemPage from './Pages/FoodItems';
import AboutPage from './Pages/AboutPage';
import ContactUsPage from './Pages/ContactUs';
import Signup from './Pages/Signup';
import Footer from './Components/Footer';
import { useContext } from 'react';
import { isAuthTokenContext } from './Context/ContextShare';

function App() {
  const {isAuthToken}=useContext(isAuthTokenContext)
  return (
    <div className="App">
     <Headder/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/signup' element={isAuthToken?<Signup/>:<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/upload' element={<UploadM3U/>}/>
      <Route path='/service' element={<ServicesPage/>}/>
      <Route path='/food' element={<AddFoodItemPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      
     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
