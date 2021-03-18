import { Card } from 'antd'
import React from 'react'

const { Meta } = Card;

export const ContentStory = ({ img, title, description, removeCard, id, }) => {

    return (
        <Card
            hoverable
            style={ { width: 240, margin: '10px' } }
            cover={ <img alt="example" src={ img }/> }
            onClick={ () => {
                removeCard(id)

            } }
        >
            <Meta title={ title } description={ description }/>
        </Card>
    )
}