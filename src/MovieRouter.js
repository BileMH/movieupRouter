
import React from 'react'
import Error from './Pages/Error';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import { Routes,Route, } from 'react-router-dom';
import NavBar from './Compouning/NavBar';
import App from './App'
import Trailer from './Pages/Trailer'
import Contact from './Pages/Contact';
import Description from './Pages/Description';


const MovieRouter = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
<Route exact path="/" element = {<App/>}/>
<Route exact path="/Home" element = {<Home/>}/>
<Route exact path= "/Contacts" element = {<Contact/>}/>
<Route exact path= "/*" element = {<Error/>}/>
<Route exact path= "/About-Us" element={<AboutUs/>}/>
<Route exact path="/Trailer/:id" element={<Trailer/>}/>
<Route exact path= "/Description/:id" element={<Description/>}/>
</Routes>
    </div>
  )
}

export default MovieRouter