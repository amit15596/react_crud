import React from 'react';

import { Form, Input, Button, Modal, Result, message } from 'antd';
import { postProductAction } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import customMessage from '../../helpers/message.json';

const AddProduct = (props) => {
  const dispatch = useDispatch();

  const {cancel, form, getProduct, page, pageSize} = props

  const addProductData = (values) => {
    dispatch(postProductAction(values))
      .then((response) => {
          if(response.success){
            message.success(customMessage.add_common_message)
            cancel()
            form.resetFields();
            dispatch(getProduct(page,pageSize))  
          }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Modal title={props.title} open={props.isModalOpen} onCancel={props.cancel} footer={null}>
        <Form onFinish={addProductData} form={props.form}>
          <Form.Item 
            name="name"
            label="name"
            rules={[
              {
                  required: true,
                  message: 'Please enter name!',
              },
            ]}  
          >
            <Input />
          </Form.Item>
          <Form.Item 
            name="qty" 
            label="qty"
            rules={[
              {
                  required: true,
                  message: 'Please enter qty!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            name="price"
            label="price"
            rules={[
              {
                  required: true,
                  message: 'Please enter price!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="description">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={props.cancel}> cancel</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddProduct;
