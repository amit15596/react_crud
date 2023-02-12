import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, Space, Button, Menu, message } from 'antd';
const { Header } = Layout;
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { logout } from '../../api/register';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './ChangePassword';
const Navbar = () => {

  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      key:1,
      label:(
        <a href="/">Change Password</a>
      )
    }, 
    {
      key:2,
      label:(
        <a href="/">Logout</a>
      )
    }
  ]
 
  // logout Function 
  const logoutFunction = async() =>{
    try{
      const refeshToken = localStorage.getItem('refeshToken')
      const result = await logout(refeshToken)
      if(result.status == 200){
        localStorage.clear()
        message.success("Logout successfully.")
        navigate('/login',{ replace: true })
      }
    } catch(error){
      console.error(error)
    } 
  }
   // Add Category Model Open click on the addCategory button
  const openChangePasswordModel = async() => {
    setIsModalOpen(true);
  };

  const closeChagePasswordModel = async()=>{
    setIsModalOpen(false)
  }

  const menus =(
    <Menu>
      <Menu.Item onClick={openChangePasswordModel}>Change Password</Menu.Item>
      <Menu.Item onClick={logoutFunction}>Logout</Menu.Item>
    </Menu>
  )

  return (
    <>
     <Header
      className="site-layout-sub-header-background"
      style={{
        paddingLeft: 10
      }}>
        <Avatar size={64} icon={<UserOutlined />}></Avatar>

        <Dropdown overlay={menus} >
          <a href="/">
              Setting
              <DownOutlined/>
          </a>
        </Dropdown>
    </Header>

     <ChangePassword title="Change Password" isModalOpen={isModalOpen} cancel={closeChagePasswordModel}/>
    </>
  );
};

export default Navbar;
