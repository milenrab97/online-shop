/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import CommentDetails from './CommentDetails'

export default class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
        }
    }

    handleCommentChange = event => {
        this.setState({
            description: event.target.value,
        })
    }

    render() {
        const { comments, productId, submitComment } = this.props
        const { description } = this.state

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
                            <Form.Control type="text" placeholder="Enter Comment" onChange={this.handleCommentChange} />
                        </Form.Group>
                        <Button
                            variant="primary"
                            onClick={e => {
                                e.preventDefault()
                                submitComment({ productId, description })
                            }}
                        >
                            Submit Comment
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
