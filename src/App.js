import { Layout } from 'antd'
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import './App.css'
import { ContentLayout } from "./Layouts/ContentLayout/ContentLayout";
import { FooterLayout } from "./Layouts/Footerlayout/FooterLayout";
import { HeaderLayout } from "./Layouts/HeaderLayout/Headerlayout";
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout'
import { contentMock } from "./mock/content";

function App() {

    const [ initialState, setInitialState ] = useState(contentMock)

    //
    // useEffect(() => {
    //     setInitialStateToLocalStorage()
    // }, [])
    console.log('>>initialState', initialState)
    return (
        <>
            <Layout>
                <MenuLayout/>
                <HeaderLayout/>
                <Layout className="site-layout" style={ { marginLeft: 200 } }>
                    <ContentLayout initialState={ initialState } setInitialState={ setInitialState }/>
                    <FooterLayout/>
                </Layout>
            </Layout>
        </>
    );
}

export default App
