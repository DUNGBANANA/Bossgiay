import Navigation from "../../components/Navigation";
import Section from "../../components/Section";
import Footer from "../../components/Footer";


import { Button, Form, Input } from "antd";
import "./main.scss";
import { Link, useNavigate} from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../api/serviceApi";
export default function Login() {
  const navigate = useNavigate();
  const onFinish = (data) => {
    mutate(data, {
      onSuccess: () => {},
      onError: () => {},
    });
    // console.log(data);
    // console.log("Success:", data);
  };
  const { mutate } = useMutation({
    mutationFn: (body) => {
      return signUp(body);
    },
    onError: () => {
      alert('Tài khoản chưa đúng !!')
    },
    onSuccess: () => {
      navigate('/');
      alert('Đăng nhập thành công')
    },
  });
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Navigation />
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

                  {/* form  */}
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label=""
                      name="email"
                      rules={[
                        {
                          type: "email",
                          required: true,
                          message: "Bạn chưa nhập email",
                        },
                      ]}
                    >
                      <div className="clearfix large_form">
                        <label>
                          <Input placeholder="Email" />
                        </label>
                      </div>
                    </Form.Item>
                    <Form.Item
                      label=""
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Bạn chưa nhập mật khẩu",
                        },
                      ]}
                    >
                      <div className="clearfix large_form">
                        <label>
                          <Input.Password placeholder="Mật khẩu" />
                          {/* <input
                          type="password"
                          placeholder="Password"
                          required
                        ></input> */}
                        </label>
                      </div>
                    </Form.Item>
                    <Form.Item>
                    <div className="clearfix action_account_custommer">
                      <div className="action_bottom button dark">
                      <Button type="primary" htmlType="submit" className="btn btn-sigin">
                        Đăng nhập
                      </Button>
                        {/* <input
                          type="submit"
                          className="btn btn-signin"
                          value="Đăng nhập"
                        /> */}
                      </div>
                      <div className="req_pass">
                        <a href="/">Quên mật khẩu</a>
                        <br /> <span>hoặc</span>
                        <Link to='/Register'> Đăng kí</Link>
                      </div>
                    </div>
                      
                    </Form.Item>
                  
                  </Form>
                </div>
                <div id="recover-password" className="userbox"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section />
      <Footer />
    </div>
  );
}
