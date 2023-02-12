import "./Login.css";
import { Avatar, Button, Form, Image, Input } from 'antd'
import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { login } from '../../api/register';
import { useNavigate } from "react-router-dom";
import Loader from "../layouts/Loader";

const Login = () => {
    
    const [form ] = Form.useForm()
    const navigate = useNavigate()
    const [navigateRouter, setNavigateRouter] = useState(false)
    const [isLoading, setIsLoading]= useState(false)

    const loginFunction  = async(value) =>{
        try {
            setIsLoading(true)
            const result = await login(value)
            if(result.status == 200){
                localStorage.setItem('accessToken',result.data.accessToken)
                localStorage.setItem('refeshToken',result.data.refreshToken)
                form.resetFields()
                setNavigateRouter(true)
                setIsLoading(false)
            }
        } catch(error){
            console.error(error)
        } 
    }
    // After login move on dashbord
    if(navigateRouter){
        navigate('/')
    }

  return (
    <>
        { isLoading ? <Loader/> : <div className='container'>
            <Form  name='login' onFinish={loginFunction} form={form}>
                <Form.Item>
                    <Image style={{marginLeft:'77px', height:'70px', width:'70px' }} preview={false} src="https://picsum.photos/200/300"/>
                </Form.Item>
                <Form.Item 
                name="email" 
                rules={[
                    {
                        required: true,
                        message: 'Please enter username!',
                    },
                ]}>
                    <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"/>
                </Form.Item>
                <Form.Item name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please enter password!',
                    },
                ]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}  type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                    <a style={{display:"flex",justifyContent:"flex-end"}} className="login-form-forgot" href="/forgot">Forgot password</a>
                </Form.Item>
                <Form.Item>
                <Button style={{display:"flex", justifyContent:"center", alignItems:"center"}} type="primary" htmlType="submit"> Submit </Button>
                </Form.Item>
                <Form.Item>
                    <a style={{display:"flex",justifyContent:"flex-end"}} className="login-form-forgot" href="/register">New Account Created</a>
                </Form.Item>
             </Form>
        </div>}

    </>
  )
}

export default Login