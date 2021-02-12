import { BarChartOutlined, CloudOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import React from 'react'
import { Layout, Menu } from "antd";

const { Sider } = Layout

export const MenuLayout = () => {
    return (
        <>
            <Sider
                style={ {
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                } }
            >
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={ [ '4' ] }>
                    <Menu.Item key="1" icon={ <UserOutlined/> }>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={ <VideoCameraOutlined/> }>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={ <UploadOutlined/> }>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={ <BarChartOutlined/> }>
                        nav 4
                    </Menu.Item>
                    <Menu.Item key="5" icon={ <CloudOutlined/> }>
                        nav 5
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    )

}
