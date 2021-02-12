import React from 'react'
import { Layout } from "antd";

const { Content } = Layout

export const ContentLayout = () => {

    return (
        <Content style={ { margin: '24px 16px 0', overflow: 'initial' } }>
            <div className="site-layout-background" style={ { padding: 24, textAlign: 'center' } }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae reprehenderit tempore vitae
                voluptate voluptatibus! Alias aspernatur, culpa doloremque eius et fuga fugiat ipsa nihil odio odit,
                quos repellendus sapiente.
            </div>
        </Content>
    )
}