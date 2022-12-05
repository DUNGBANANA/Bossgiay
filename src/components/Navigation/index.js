
import {Link} from 'react-router-dom';


import { AiOutlineSearch } from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

export default function Navigation (){
    return (
        <div>
        <div className='promo-bar'>
            <a href='/'><span>SNEAKER  & CLOTHING AUTHENTIC 100%</span></a>
        </div>
        <header className='main-header border'>
            <div className='container'>
                <div className='row row-flex'>
                    <div className='col-md-2 col-sm-5 col-xs-5'>
                        <div className='logo'>
                            <Link  to='/Home'><h1>BOSS GIÀY</h1></Link>
                        </div>
                    </div>
                    <div className='col-md-8 hidden-sm hidden-xs'>
                        <div className='main-header-menu'>
                            <nav className='desk-menu'>
                                <ul>
                                    <li>
                                        <Link to='/Sneaker'>SNEAKER</Link>
                                    </li>
                                    <li>
                                        <Link to='/Bag'>BAG</Link>
                                    </li>
                                    <li>
                                        <a href='/'>SLIDE/SANDAL</a>
                                    </li>
                                    <li>
                                        <a href='/'>CLOTHING</a>
                                    </li>
                                    <li>
                                        <a href='/'>SNEAKER SPA</a>
                                    </li>
                                    <li>
                                        <a href='/'>ACCESSORIES</a>
                                    </li>
                                    <li>
                                        <Link to='/Contact'>LIÊN HỆ</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-7 col-xs-7'> 
                    <div className='main-header-action row-flex'>
                    <Link to='/Login'><AiOutlineUser/></Link>
                        
                        <AiOutlineSearch />
                        <AiOutlineShoppingCart/>
                    </div>             
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
}