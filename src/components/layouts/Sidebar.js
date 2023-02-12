import React from 'react';
import { ProjectOutlined, DashboardTwoTone, UnorderedListOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sider className="ant-layout-sider ant-layout-sider-light">
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['4']}
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            {
              key: '/',
              icon: <DashboardTwoTone />,
              label: 'Dashbord'
            },
            {
              key: '/category',
              icon: <UnorderedListOutlined />,
              label: 'Category'
            },
            {
              key: '/product',
              icon: <ProjectOutlined />,
              label: 'Product'
            }
          ]}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
