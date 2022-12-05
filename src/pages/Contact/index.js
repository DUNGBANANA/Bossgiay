import Navigation from '../../components/Navigation'
import Footer   from '../../components/Footer'
import Section from '../../components/Section'

import './main.scss'
import {Link} from 'react-router-dom'
function Contact (){
    return(
        <div>
            <Navigation />
            <main class>

            <div className='pageAbout-us page-layout'>
                <div className='breadcrumb-shop'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  '>
                                <ol className='breadcrumb breadcrumb-arrows'>
                                    <li><Link to='/Home'>Trang chủ</Link></li>
                                    <li className='active'>LIÊN HỆ</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row wrapper-row pd-page'>
                        <div className='col-md-3 hidden-sm hidden-xs'>
                            <div className='sidebar-page'>
                                <div className='group-menu'>
                                    <div className='page_menu_title title_block'>
                                        <h2>Danh mục trang</h2>
                                    </div>
                                    <div className='layered layered-category'>
                                        <div className='layered-content'>
                                            <ul className='tree-menu'>
                                                <li>
                                                    <span></span>
                                                    <Link to='/Sneaker'>Sneaker</Link>
                                                </li>
                                                <li>
                                                    <span></span>
                                                    <a href='/'>Slide/Sandals</a>
                                                </li>
                                                <li>
                                                    <span></span>
                                                    <Link to='/Bag'>Bag</Link>
                                                </li>
                                                <li>
                                                    <span></span>
                                                    <a href='/'>Clothing</a>
                                                </li>
                                                <li>
                                                    <span></span>
                                                    <a href='/'>Sneaker Spa</a>
                                                </li>
                                                <li>
                                                    <span></span>
                                                    <a href='/'>Accessories</a>
                                                </li>
                                                <li>
                                                    <span></span>
                                                    <a href='/'>Sales</a>
                                                </li>
                                                <li>
                                                    <span></span>
                                                    <Link to='/Contact'>Liên hệ</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9 col-sm-12 col-xs-12'>
                            <div className='page-wrapper'>
                                <div className='heading-page'>
                                    <h1>LIÊN HỆ</h1>
                                </div>
                                <div className='wrapbox-content-page'>
                                    <div className='content-page '>
                                        <p>&nbsp;</p>
                                        <h4 className='footer-title'>&nbsp; &nbsp; &nbsp; &nbsp; </h4>
                                        <span >THÔNG TIN LIÊN HỆ</span>
                                        <div className='footer-content toggle-footer'>
                                            <ul>
                                                <li>
                                                    <strong>Địa chỉ: Số 28/2 Đường Huỳnh Văn Bánh Phường 15 Phú Nhuận Hồ Chí Minh</strong>
                                                </li>
                                                <li>
                                                    <strong>Điện thoại: 0909956706 ( 24/7)</strong>
                                                    <br/>
                                                    <span>Dự Phòng: 0923 01 02 03</span>
                                                </li>
                                                <li>
                                                    <strong>Mail: Bossgiay180594@gmail.com</strong>
                                                    <br/>
                                                    <span>Facebook: https://www.facebook.com/BossGiay/</span>
                                                    <br/>
                                                    <span>Instagram: https://www.instagram.com/bossgiay/</span>
                                                </li>
                                            </ul>

                                            <span >THỜI GIAN LÀM VIỆC</span>
                                            <ul>
                                                <li>
                                                    <strong>Từ thứ 2 đến chủ nhật</strong>
                                                    <br></br>
                                                </li>
                                                <li>
                                                    <strong>Từ 12 h đến 20h mỗi ngày</strong>
                                                    <br/>
                                                    <span>MUA BÁN SỸ LẺ HÀNG SHIP :  SMS/ CALL/ ZALO 0923 010203 ( TRUNG )</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
            <Section/>
            <Footer/>
        </div>
    )
}

export default Contact