import { Layout } from 'antd'
import 'antd/dist/antd.css';
import React, { useEffect } from 'react'


import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import './App.css'
import { AddContent } from "./components/AddContent/AddContent";

import FormAbout from './components/form/Form'
import { News } from "./components/News/News";
import { ABOUT_PATH, HOME_PATH, NEWS_PATH, ADD_CONTENT } from "./helpers/constants";
import { ContentLayout } from "./Layouts/ContentLayout/ContentLayout";
import { FooterLayout } from "./Layouts/Footerlayout/FooterLayout";
import { HeaderLayout } from "./Layouts/HeaderLayout/Headerlayout";
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout'
import { useRootStore } from "./mobx/ProviderRootStore";

function App() {

    const { setInitialState } = useRootStore()

    useEffect(() => {
        setInitialState()
    }, [])

    return (
        <Router>
            <Layout>
                <MenuLayout/>
                <HeaderLayout/>
                <Layout className="site-layout" style={ { marginLeft: 200 } }>
                    <Switch>
                        <Route exact path={ HOME_PATH }>
                            <ContentLayout/>
                        </Route>
                        <Route exact path={ NEWS_PATH }>
                            <News/>
                        </Route>
                        <Route exact path={ ABOUT_PATH }>
                            <FormAbout/>
                        </Route>
                        <Route exact path={ ADD_CONTENT }>
                            <AddContent/>
                        </Route>
                    </Switch>
                    <FooterLayout/>
                </Layout>
            </Layout>


        </Router>
    );
}

export default App
