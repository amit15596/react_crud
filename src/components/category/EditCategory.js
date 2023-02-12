import React, { useEffect } from 'react';
import { Button, Form, Input, Modal, message } from 'antd';
import customMessage from '../../helpers/message.json';
import { updateCategory } from '../../api/category';

const EditCategory = (props) => {
  const { cancel, getCategory, editRecord, page, pageSize } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: editRecord.name,
      description: editRecord.description,
      id: editRecord._id
    });
  }, [editRecord]);

  const updateCategoryData = async (values) => {
    const result = await updateCategory(values, values.id);
    console.log(result, 'check update  result');
    if (result.status === 200) {
      message.success(customMessage.update_common_message);
      cancel();
      getCategory(page, pageSize);
    }
  };

  return (
    <>
      <Modal title={props.title} open={props.isEditModelOpen} onCancel={props.cancel} footer={null}>
        <Form onFinish={updateCategoryData} form={form}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: customMessage.category_name }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
            <Button onClick={props.cancel}> cancel</Button>
          </Form.Item>
          <Form.Item name="id">
            <Input type={'hidden'} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditCategory;
