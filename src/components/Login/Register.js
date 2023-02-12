import { Form, Input, Button, message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {addNewRegister} from '../../api/register'

const  Register = () => {

  const [form] = Form.useForm()
  let navigate = useNavigate()

  const [navigateRoute, setNavigetRoute]=useState(false)

  const addRegister = async(values)=>{
    try{
        const result = await addNewRegister(values)
        if(result.status == 201){
          message.success("Register successfully.")
          form.resetFields()
          setNavigetRoute(true)
        }
    } catch(error){
      console.log(error)
    }
  }

  if(navigateRoute){
    navigate('/login')
  }
  return (
   <>
   <div style={{ height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <Form onFinish={addRegister} form={form}>
      <Form.Item>
        <h3 style={{marginLeft:"70px", color:"red"}}> New Account Created</h3>
      </Form.Item> 
      <Form.Item 
        label="Name" 
        name="name"
        rules={[
          {
              required: true,
              message: 'Please enter username!',
          },
        ]}
      >
        <Input placeholder='Enter Name'/>
      </Form.Item>
      <Form.Item 
        label="Password"
        name="password"
        rules={[
          {
              required: true,
              message: 'Please enter password!',
          },
        ]}
      >
        <Input.Password placeholder='Enter Password'/>
      </Form.Item>
      <Form.Item 
        label="Email" 
        name="email"
        rules={[
          {
              required: true,
              message: 'Please enter email!',
          },
        ]}
      >
        <Input placeholder='Enter Email Address'/>
      </Form.Item>
      <Form.Item 
        label="Mobile No"
        name="mobileno"
        rules={[
          {
              required: true,
              message: 'Please enter mobileno!',
          },
        ]}
      >
        <Input placeholder='Enter Mobile Number'/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
    </div>
   </>
  )
}

export default Register