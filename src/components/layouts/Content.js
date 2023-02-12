import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import { Outlet } from 'react-router-dom';

const Contentbar = () => {
  return (
    <Content
      style={{
        margin: '0px 10px 0px'
      }}>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 510
        }}>
        <Outlet />
      </div>
    </Content>
  );
};

export default Contentbar;
