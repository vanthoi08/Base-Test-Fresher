import { Button, Col, Form, Input, notification, Row, message } from "antd";
import { Divider } from "antd";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { callLogin, callRegister } from "../../services/api";
import { useDispatch } from "react-redux";
import { doLoginAction } from "../../redux/account/accountSlice";
const LoginPage = () =>{
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();

    const onFinish = async(values) =>{
        const{username, password} = values;
        setIsSubmit(true);
        const res = await callLogin(username,password,5000);
        setIsSubmit(false);
        if(res.data){
            localStorage.setItem('access_token',res.data.access_token);
            dispatch(doLoginAction(res.data.user));
            notification.success({
                message: "Đăng nhập thành công !"
            });
           navigate("/book");
        }else{
            notification.error({
                message: "Đăng nhập bị lỗi!",
                description: JSON.stringify(res.message)
            })
        }
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
                      name="username"
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