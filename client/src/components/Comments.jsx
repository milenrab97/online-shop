/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import CommentDetails from './CommentDetails'

export default class Comments extends Component {
    render() {
        const { comments } = this.props

        return (
            <div>
                <div>
                    {comments.map((comment, ind) => {
                        return (
                            <div key={ind}>
                                <CommentDetails
                                    author={comment.author}
                                    description={comment.description}
                                    time={comment.time}
                                />
                            </div>
                        )
                    })}
                </div>
                <div>
                    <Form style={{ width: '70rem', padding: '5px' }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Comment" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit Comment
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
