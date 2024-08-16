import { Button, Col, Form, Input, notification, Row, message } from "antd";
import { Divider } from "antd";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { callRegister } from "../../services/api";
const LoginPage = () =>{

    const [isSubmit, setIsSubmit] = useState(false);
    const onFinish = () =>{
alert("me")
    }
    return (
        <>
          <div className="register-page" >
            <main className="main">
              <div className="container">
                <section className="wrapper">
                  <div className="heading">
                    <h2 className="text text-large">Đăng Nhập</h2>
                    <Divider />
                  </div>
                  <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    onFinish={onFinish}
                    autoComplete="off"
                    style={{ maxWidth: 600, margin: "0 auto" }}
                  >
    
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Email :"
                      name="email"
                      rules={[
                        { required: true, message: "email không được để trống !" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
    
                    <Form.Item
                      labelCol={{ span: 24 }}
                      label="Password :"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "password không được để trống !",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
    
    
                    <Form.Item >
                      <Button type="primary" htmlType="submit" loading={isSubmit}>
                        Login
                      </Button>
                    </Form.Item>
                    <Divider>Or</Divider>
                    <p className="text text-normal">Chưa có tài khoản ?
                      <span>
                         <Link to={"/register"}> Đăng ký</Link>
                      </span>
                    </p>
                  </Form>
                </section>
              </div>
            </main>
          </div>
        </>
      );
}
export default LoginPage;