import Header from "../../components/Header";
import Product  from "../../components/Product";
import Footer from "../../components/Footer";
import Section  from "../../components/Section";
import Sandals  from "../../components/Sandals";

import './main.scss'


function Home () {
    return(
    <div>
        <Header/>
        <Product/>
        <Sandals/>
        <Section/>
        <Footer/>
    </div>
    ) 
}

export default Home;