import React from 'react'

import { Form,Input, Button} from 'antd'
 
const Create = () => {

    const onFinish = (values) =>{
        console.log(values, "get product details")
    }
    
    return(
        <Form name='product' onFinish={onFinish}>
        <Form.Item 
        label="Product Name" 
        name="name"
        rules={
          [{
            required: true,
            message:"Please Enter Product Name"
          }]
        }
        >
          <Input/>
        </Form.Item>
        <Form.Item 
        label="Price"
        name="price"
        rules={
          [{
            required:true,
            message:"Please Enter Price"
          }]
        } 
        >
          <Input/>
        </Form.Item>
        <Form.Item 
          label="Qty"
          name="qty"
          rules={[
            {
              required:true,
              message:"Please Enter Qty" 
            },
            {
                validator:(_,value) =>{
                    if(value > 0){
                        return Promise.resolve()
                    } else {
                        return Promise.reject('Qty must be greater then 0')
                    }
                }
            }
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item label="Description" name="desc" >
          <Input/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit'>Add Product</Button>  
        </Form.Item> 
        </Form>
     )   
}

export default Create;