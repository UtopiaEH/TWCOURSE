import { Layout } from "antd";
import React from 'react'
import { ContentStory } from "../../components/ContentStory/ConentStory";

import './style.css'

const { Content } = Layout

export const ContentLayout = ({ initialState, setInitialState }) => {

    // const [ content, setContent ] = useState(getInitialState())

    // useEffect(() => {
    //     setContent(getStateByKey('initialState'))
    // }, [])

    return (
        <Content>
            <div className="content" style={ { padding: 24, textAlign: 'center' } }>
                { !initialState.length ? (
                    <div>No Content</div>
                ) : (
                    initialState.map(({ description, img, title }, index) => {
                        return (
                            <ContentStory initialState={ initialState } setInitialState={ setInitialState }
                                          key={ index } description={ description }
                                          title={ title } img={ img }
                                          index={ index }/>
                        )
                    })
                ) }


            </div>
        </Content>
    )
}