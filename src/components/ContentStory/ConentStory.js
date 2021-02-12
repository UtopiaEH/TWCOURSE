import React from 'react'
import { Card } from 'antd'

const { Meta } = Card;

export const ContentStory = ({ img, title, description }) => {

    return (
        <Card
            hoverable
            style={ { width: 240, margin: '10px' } }
            cover={ <img alt="example" src={ img }/> }
        >
            <Meta title={ title } description={ description }/>
        </Card>
    )
}