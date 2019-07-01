import React, { Component } from 'react'
import CommentDetails from './CommentDetails'

export default class Comments extends Component {
    renderComments = () => {
        let test = [
            {
                author: 'Mitko',
                description: 'Mnogo qk produkt',
                time: '2 chasa',
            },
            {
                author: 'Mitko1',
                description: 'Mnogo qk produkt1',
                time: '2 chasa1',
            },
        ]

        return test.map((comment, ind) => {
            return (
                <div key={ind}>
                    <CommentDetails author={comment.author} description={comment.description} time={comment.time} />
                </div>
            )
        })
    }

    render() {
        return <div>{this.renderComments()}</div>
    }
}
