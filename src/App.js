import {Routes, Route} from 'react-router-dom'
// import Home from './pages/Home/Home.js';
// import Bag from './pages/Bag/Bag.js';
// import Sneaker from './pages/Sneaker/index.js';
// import Contact from './pages/Contact/index.js';
// import Login from './pages/Login/index.js';
// import Register from './pages/Register/index.js';
// import  ProductDetails from './pages/ProductDetails/index.js';

import './App.css';
import { publicRoutes } from './routes/index.js';


function App() {
  return (
    <div className='App'>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page/>}/>
        })}
        {/* <Route path='/' element = {<Home/>}/>
        <Route path='/ProductDetails/:id' element ={<ProductDetails/>}/>
        <Route path='/Bag' element = {<Bag/>}/>
        <Route path='/Sneaker' element = {<Sneaker/>}/>
        <Route path='/Contact' element = {<Contact/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Register' element = {<Register/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
