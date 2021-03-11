import { Layout } from 'antd'
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import './App.css'
import { NoContent } from "./components/NoContent/NoContent";
import { ABOUT_PATH, HOME_PATH, NEWS_PATH } from "./helpers/constants";
import { ContentLayout } from "./Layouts/ContentLayout/ContentLayout";
import { FooterLayout } from "./Layouts/Footerlayout/FooterLayout";
import { HeaderLayout } from "./Layouts/HeaderLayout/Headerlayout";
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout'
import { StoreProvider } from "./mobx/ProviderRootStore";
import { contentMock } from "./mock/content";

import FormAbout from './components/form/Form'


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {

    const [ initialState, setInitialState ] = useState(contentMock)

    return (
        <StoreProvider>
            <Router>
                <Layout>
                    <MenuLayout/>
                    <HeaderLayout/>
                    <Layout className="site-layout" style={ { marginLeft: 200 } }>
                        {/*<ContentLayout initialState={ initialState } setInitialState={ setInitialState }/>*/ }

                        <Switch>
                            <Route exact path={ HOME_PATH }>
                                <ContentLayout />
                            </Route>
                            <Route exact path={ NEWS_PATH }>
                                <NoContent/>
                            </Route>
                            <Route exact path={ ABOUT_PATH }>
                                <FormAbout/>
                            </Route>
                        </Switch>
                        <FooterLayout/>
                    </Layout>
                </Layout>


            </Router>
        </StoreProvider>
    );
}

export default App
