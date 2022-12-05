import Navigation  from "../../components/Navigation"
import Section from "../../components/Section"
import Footer from "../../components/Footer"
import './main.scss'
export default function Login(){
    return(
        <div>
            <Navigation/>
            <div className="layout-account">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 wrapbox-heading-account">
                            <div className="header-page clearfix">
                                <h1>Đăng nhập</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 wrapbox-content-account">
                            <div className="customer-login">
                                <div id="login" className="userbox">
                                    <div className="accounttype">
                                        {/* <h2 className="title"></h2> */}
                                    </div>
                                    <form>
                                        <div className="clearfix large_form">
                                            <label>
                                                <input type="email" placeholder='Email'required></input>
                                            </label>
                                        </div>
                                        <div className="clearfix large_form">
                                            <label>
                                                <input type="password" placeholder='Password' required></input>
                                            </label>
                                        </div>
                                        <div className="clearfix action_account_custommer">
                                            <div className="action_bottom button dark">
                                                <input type="submit" className="btn btn-signin" value="Đăng nhập"/>
                                            </div>
                                            <div className="req_pass">
                                                <a href="/">Quên mật khẩu</a>
                                                <br/> <span>hoặc
                                                </span>
                                                <a href="/"> Đăng kí</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div id="recover-password" className="userbox"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Section/>
            <Footer/>
        </div>
    )
}