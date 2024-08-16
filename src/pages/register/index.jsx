
import { Button, Col, Form, Input, Row } from 'antd';
import { Divider } from "antd";

const RegisterPage = () =>{
    const [form] = Form.useForm();
    const onFinish = (values) =>{
        console.log(">>> Check  value" ,values);
    }
    return(
        <>
          <div className="register-page" style={{padding: "50px"}}>
          <h2 
              style={{textAlign:"center"}}
              >
                Đăng ký người dùng mới
            </h2>
        <Divider />
        
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            style={{ maxWidth: 600, margin: "0 auto" }}
         >
            

            <Form.Item
                label="Full Name :"
                name="fullName"
             rules={[{ required: true, message: 'username không được để trống !' }]}
             >
                <Input />
             </Form.Item>

            <Form.Item
                label="Email :"
                name="email"
             rules={[{ required: true, message: 'email không được để trống !' }]}
             >
                <Input />
             </Form.Item>
      

            <Form.Item
                label="Password :"
                name="password"
             rules={[{ required: true, message: 'password không được để trống !' }]}
             >
                <Input.Password />
             </Form.Item>

            <Form.Item
                label="Phone :"
                name="phone"
             rules={[{ required: true, message: 'phone không được để trống !' }]}
             >
                <Input />
             </Form.Item>

             <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Register
                 </Button>
            </Form.Item>

  </Form>
  </div>
        </>
    );
}
export default RegisterPage;