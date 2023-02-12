import { Button, Form, Input, message, Modal } from 'antd';
import React from 'react';
import { addCategory } from '../../api/category';
import customMessage from '../../helpers/message.json';

const AddCategory = (props) => {
  const { cancel, getCategory, form, page, pageSize } = props;

  const addCategoryData = async (values) => {
    try {
      const result = await addCategory({ ...values });
      if (result.status === 201) {
        message.success(customMessage.add_common_message);
        cancel();
        form.resetFields();
        getCategory(page, pageSize);
      } else {
        if (Object.keys(result).length) {
          message.error(result.message);
        }
      }
    } catch (error) {
      console.log(error, 'messsage error in add category');
    }
  };

  return (
    <div>
      {/* Add Model  */}
      <Modal title={props.title} open={props.isModalOpen} onCancel={props.cancel} footer={null}>
        <Form onFinish={addCategoryData} form={props.form}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: customMessage.category_name }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button onClick={props.cancel}> cancel</Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddCategory;
