import './main.scss'

function Footer (){
    return (
        <footer className='main-footer'>
            <div className='main-footer--bottom'>
            <div className='container'>
            <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg'>
                        <div className='footer-col footer-block'>
                            <h4 className='footer-title'>Giới thiệu</h4>
                            <div className='footer-content'>
                                <p>BOSS GIÀY MANG ĐẾN NHỮNG DỊCH VỤ VÀ SẢN PHẨM CHÍNH HÃNG TỐT NHẤT CHO KHÁCH HÀNG
______________________________
Hộ Kinh Doanh: B-O-S-S GIÀY

Địa Chỉ: 28/2 Huỳnh Văn Banh P15 Phú Nhuận HCM

MST: 0314452007</p>
                                <div className='social-list'>
                                    <a href='/'>.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg'>
                        <div className='footer-col footer-link'>
                            <h4 className='footer-title'>Liên kết</h4>
                            <div className='footer-content toggle-footer'>
                                <ul>
                                    <li className='item'><a href='/'>Tìm kiếm</a></li>
                                    <li className='item'><a href='/'>Chính sách đổi trả</a></li>
                                    <li className='item'><a href='/'>Chính sách bảo hành</a></li>
                                    <li className='item'><a href='/'>Giao hàng tận nơi</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg'>
                        <div className='footer-col footer-block'>
                            <h4 className='footer-title'>Thông tin liên hệ</h4>
                            <div className='footer-content toggle-footer'>
                                <ul>
                                    <li><span>Địa chỉ: </span>Số 28/2 Đường Huỳnh Văn Bánh Phường 15 Phú Nhuận Hồ Chí Minh</li>
                                    <li><span>Điện thoại:</span> 0909956706</li>
                                    <li><span> Instagram</span> BossGiay</li>
                                    <li><span>Mail:</span> Bossgiay180594@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg'>
                        <div className='footer-col footer-block'>
                            <h4 className='footer-title'>FANPAGE</h4>
                            <div className='footer-content'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='main-footer--copyright'>
                <div className='container'>
                    <div className='main-footer--border'>
                        <p>Copyright © 2022 <a href='https://bossgiay.vn/'>BOSS GIÀY</a></p>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;