import { Button, Col, Form, Input, Row } from "antd";
import { Divider } from "antd";
import "./register.scss";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(">>> Check  value", values);
  };
  return (
    <>
      <div className="register-page" >
        <main className="main">
          <div className="container">
            <section className="wrapper">
              <div className="heading">
                <h2 className="text text-large">Đăng Ký Tài Khoản</h2>
                <Divider />
              </div>
              <Form
                name="basic"
                labelCol={{ span: 6 }}
                form={form}
                onFinish={onFinish}
                autoComplete="off"
                style={{ maxWidth: 600, margin: "0 auto" }}
              >
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Full Name :"
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "username không được để trống !",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

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

                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Phone :"
                  name="phone"
                  rules={[
                    { required: true, message: "phone không được để trống !" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item >
                  <Button type="primary" htmlType="submit" loading={false}>
                    Register
                  </Button>
                </Form.Item>
                <Divider>Or</Divider>
                <p className="text text-normal">Đã có tài khoản ?
                  <span>
                     <Link to={"/login"}> Đăng nhập</Link>
                  </span>
                </p>
              </Form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
export default RegisterPage;
