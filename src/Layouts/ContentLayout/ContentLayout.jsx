import { Layout } from "antd";
import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { ContentStory } from "../../components/ContentStory/ConentStory";

import './style.css'
import { useRootStore } from "../../mobx/ProviderRootStore";

const { Content } = Layout

export const ContentLayout = observer(() => {

    const { content$, contentSum } = useRootStore()

    return (
        <Content>

            <div className="content" style={ { padding: 24, textAlign: 'center' } }>
                { contentSum }

                { !content$.length ? (
                    <div>No Content</div>
                ) : (
                    content$.map(({ description, img, title, removeCard, id }) => {
                        return (
                            <ContentStory
                                key={ id } description={ description }
                                title={ title } img={ img }
                                id={ id }
                                removeCard={ removeCard }
                            />
                        )
                    })
                ) }

            </div>
        </Content>
    )
})

