import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js';
import Bag from './pages/Bag/Bag.js';
import Sneaker from './pages/Sneaker/index.js';
import Contact from './pages/Contact/index.js';
import Login from './pages/Login/index.js';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Bag' element = {<Bag/>}/>
        <Route path='/Sneaker' element = {<Sneaker/>}/>
        <Route path='/Contact' element = {<Contact/>}/>
        <Route path='/Login' element = {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
