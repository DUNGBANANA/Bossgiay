import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js';
import Bag from './pages/Bag/Bag.js';
import Sneaker from './pages/Sneaker/Sneaker.js';
import Contact from './pages/Contact/Contact.js';


import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Bag' element = {<Bag/>}/>
        <Route path='/Sneaker' element = {<Sneaker/>}/>
        <Route path='/Sneaker' element = {<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
