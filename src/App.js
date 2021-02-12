import 'antd/dist/antd.css';
import React, { useEffect } from 'react'
import './App.css'
import { Layout } from 'antd'
import { setInitialStateToLocalStorage } from "./helpers/functions";
import { ContentLayout } from "./Layouts/ContentLayout/ContentLayout";
import { FooterLayout } from "./Layouts/Footerlayout/FooterLayout";
import { HeaderLayout } from "./Layouts/HeaderLayout/Headerlayout";
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout'
import 'antd/dist/antd.css';

function App() {

    useEffect(() => {
        setInitialStateToLocalStorage()
    }, [])

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
