import React, { useEffect, useState } from 'react'
import { Layout } from "antd";
import { ContentStory } from "../../components/ContentStory/ConentStory";
import { getStateByKey } from "../../helpers/functions";

import './style.css'

const { Content } = Layout

export const ContentLayout = () => {

    const [ content, setContent ] = useState([])

    useEffect(() => {
        setContent(getStateByKey('initialState'))
    })

    return (
        <Content style={ { margin: '24px 16px 0', overflow: 'initial' } }>
            <div className="site-layout-background content" style={ { padding: 24, textAlign: 'center' } }>
                { !content.length ? (
                    <div>No Content</div>
                ) : (
                    content.map(({ description, img, title }) => {
                        return (
                            <ContentStory description={ description } title={ title } img={ img }/>
                        )
                    })
                ) }


            </div>
        </Content>
    )
}