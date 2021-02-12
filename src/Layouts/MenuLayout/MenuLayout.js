import { BarChartOutlined, CloudOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import React from 'react'
import { Layout, Menu } from "antd";
import { MenuRoot } from "../../helpers/constants";

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

                    { MenuRoot.map((menu) => {
                        return (
                            <Menu.Item key={ menu.id } icon={ menu.icon }>
                                { menu.name }
                            </Menu.Item>
                        )
                    }) }


                    {/*<Menu.Item key="1" icon={ <UserOutlined/> }>*/ }
                    {/*    nav 1*/ }
                    {/*</Menu.Item>*/ }

                </Menu>
            </Sider>
        </>
    )

}

