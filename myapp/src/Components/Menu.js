import React from 'react';
import { Menu } from "antd";

const MyMenu = () => {
    return(
        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
      </Menu>
    );
}
export default MyMenu ; 