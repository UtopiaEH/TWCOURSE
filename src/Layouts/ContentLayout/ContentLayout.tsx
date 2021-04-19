import { Button, Card, Input, Layout } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useRootStore } from '../../mobx/ProviderRootStore'

import './style.css'

const { Content } = Layout

export const ContentLayout = observer(() => {
    const { updateField, requestToGoogle, query_param_google, content_from_google$ } = useRootStore()

    return (
        <Content>

            <div className='content' style={ { padding: 24, textAlign: 'center' } }>
                <Input value={ query_param_google } onChange={ (e) => updateField(e.target.value) } />
                <Button onClick={ () => requestToGoogle() }>Send</Button>

                { content_from_google$.map((content, index) => {
                    return (
                        <Card key={ index } title={ content.title } style={ { width: 300 } }>
                            { content.description }
                            { content.link }
                        </Card>
                    )
                }) }

                {/*{ !content$.length ? (*/ }
                {/*    <div>No Content</div>*/ }
                {/*) : (*/ }
                {/*    content$.map(({ description, img, title, removeCard, id }) => {*/ }

                {/*        return (*/ }
                {/*            <ContentStory*/ }
                {/*                key={ id } description={ description }*/ }
                {/*                title={ title } img={ img }*/ }
                {/*                id={ id }*/ }
                {/*                removeCard={ removeCard }*/ }
                {/*            />*/ }
                {/*        )*/ }
                {/*    })*/ }
                {/*) }*/ }

            </div>
        </Content>
    )
})

