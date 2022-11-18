import Header from "../../components/Header";
import Product  from "../../components/Product";
import Footer from "../../components/Footer";
import Section  from "../../components/Section";
import './main.scss'


function Home () {
    return(
    <div>
        <Header/>
        <Product/>
        <Section/>
        <Footer/>
    </div>
    ) 
}

export default Home;