import Navigation from "../../components/Navigation";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import { Button, Form, Input, Radio } from "antd";
import "./main.scss";
import { createUser } from '../../api/serviceApi';
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const navigate = useNavigate();
  const onFinish = (data) => {
    mutate(data, {
      onSuccess: () => {},
      onError: () => {},
    });
    console.log(data);
  };
  const { mutate } = useMutation({
    mutationFn: (body) => {
      return createUser(body);
    },
    onError: () => {
    },
    onSuccess: () => {
      navigate('/login');
      alert('Tạo tài khoản thành công')
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
                <h1>Tạo tài khoản</h1>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 wrapbox-content-account-register">
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
                      name="firtName"
                      rules={[
                        {
                          type: "",
                          required: true,
                          message: "Bạn chưa nhập họ",
                        },
                      ]}
                      hasFeedback
                    >
                      <div className="clearfix large_form">
                        <label>
                          <Input placeholder="Họ" />
                        </label>
                      </div>
                    </Form.Item>
                    <Form.Item
                      label=""
                      name="lastname"
                      rules={[
                        {
                          type: "",
                          required: true,
                          message: "Bạn chưa nhập tên",
                        },
                      ]}
                    >
                      <div className="clearfix large_form">
                        <label>
                          <Input placeholder="Tên" />
                        </label>
                      </div>
                    </Form.Item>
                    <Form.Item name="sex">
                      <Radio.Group>
                        <Radio value="boy"> Nam </Radio>
                        <Radio value="girl"> Nữ </Radio>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item
                      label=""
                      name="email"
                      rules={[
                        {
                          // type: "email",
                          required: true,
                          message: "Bạn chưa nhập email",
                        },
                        {type: "email", message: "Chưa đúng email"}
                      ]}
                      hasFeedback
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
                        {min: 6, message: "Mật khẩu tối thiểu 6 kí tự"},
                        // {
                        //   validator: (_, value) => value && value.includes("a") 
                        //   ? Promise.resolve()
                        //   : Promise.reject("Mật khẩu phải bao gồm cả chữ hoa")
                        // }
                      ]}
                      hasFeedback
                    >
                      <div className="clearfix large_form">
                        <label>
                          <Input.Password placeholder="Mật khẩu" />                       
                        </label>
                      </div>
                    </Form.Item>
                    <Form.Item
                      label=""
                      name="confirmpassword"
                      rules={[
                        {
                          required: true,
                          message: "Bạn chưa xác nhận mật khẩu",
                        },
                        ({getFieldValue}) => ({
                          validator(_, value){
                            if(!value || getFieldValue('password')=== value){
                            return Promise.resolve()
                          }
                          return Promise.reject('Mật khẩu chưa trùng hợp');
                          }
                        })
                      ]}
                      hasFeedback
                    >
                      <div className="clearfix large_form">
                        <label>
                          <Input.Password placeholder="Xác nhận mật khẩu" />                        
                        </label>
                      </div>
                    </Form.Item>
                    <Form.Item>
                      <div className="clearfix action_account_custommer">
                        <div className="action_bottom button dark">
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="btn btn-sigin"
                          >
                            Đăng kí
                          </Button>
                      
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
