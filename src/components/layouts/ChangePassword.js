import { Button, Form, Input, Modal } from 'antd'
import React from 'react'
import { LockOutlined } from '@ant-design/icons';

const ChangePassword = (props) => {
  return (
    <>
        <Modal title={props.title} open={props.isModalOpen} onCancel={props.cancel} footer={null}>
            <Form name='password' >
                <Form.Item>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Enter Current Password'/>
                </Form.Item>
                <Form.Item>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Enter New Password'/>     
                </Form.Item>
                <Form.Item>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Enter Confrim Password'/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        </Modal>
    </>
  )
}

export default ChangePassword