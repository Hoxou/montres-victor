import * as React from "react"
import { Menu } from 'antd';
import { HomeOutlined, MessageOutlined, FileImageOutlined, ManOutlined } from '@ant-design/icons';

const NavBar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="posts" icon={<MessageOutlined />}>
        Posts
      </Menu.Item>
      <Menu.Item key="photos" icon={<FileImageOutlined />}>
        Photos
      </Menu.Item>
      <Menu.Item key="voc" icon={<ManOutlined />}>
        Watch vocabulary
      </Menu.Item>
    </Menu>
  );
}

export default NavBar