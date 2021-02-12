import 'antd/dist/antd.css';
import React from 'react'
import './App.css'
import { Layout } from 'antd'
import { ContentLayout } from "./Layouts/ContentLayout/ContentLayout";
import { FooterLayout } from "./Layouts/Footerlayout/FooterLayout";
import { HeaderLayout } from "./Layouts/HeaderLayout/Headerlayout";
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout'
import 'antd/dist/antd.css';

function App() {
    return (
        <>
            <Layout>
                <MenuLayout/>
                <HeaderLayout/>
                <Layout className="site-layout" style={ { marginLeft: 200 } }>
                    <ContentLayout/>
                    <FooterLayout/>
                </Layout>
            </Layout>
        </>
    );
}

export default App
