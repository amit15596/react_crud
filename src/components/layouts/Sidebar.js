import React  from "react";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider} = Layout;
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    // const[collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    return(
        <>
            <Sider className="ant-layout-sider ant-layout-sider-light">
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    onClick ={({key}) =>{
                        navigate(key)
                    }}
                    items={[
                        {
                        key: '/',
                        icon: <UserOutlined />,
                        label: 'Dashbord',
                        },
                        {
                        key: '/category',
                        icon: <VideoCameraOutlined />,
                        label: 'Category',
                        },
                        {
                        key: '/product',
                        icon: <UploadOutlined />,
                        label: 'Product',
                        },
                    ]}
                />
            </Sider>
        </>
     
    )
}

export default Sidebar;