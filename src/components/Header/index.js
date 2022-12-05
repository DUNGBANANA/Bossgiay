import {Link} from 'react-router-dom';
import Navigation from '../Navigation';
import img1 from '../../assets/slideshow_2.webp'
import './main.scss'


function Header (){
    return (
        <div>
        <Navigation/>
        <div className='item'>
            <Link to='/Sneaker'>
                <img src={img1} alt=''/>
            </Link>
        </div>
        </div>
    )
}

export default Header;