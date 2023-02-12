import { Button, Form, Input } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';

const  ForgotPassword = () => {
  return (
    <>
        <div style={{height:'100vh', display:'flex', justifyContent:"center", alignItems:"center" }}>
            <Form name='forgotpassword'>
                <Form.Item>
                    <h3> Forgot Password</h3>
                </Form.Item>
                <Form.Item>
                    <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter Email Address"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </div>
    </>
  )
}

export default ForgotPassword