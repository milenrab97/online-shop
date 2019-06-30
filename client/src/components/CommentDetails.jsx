import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class CommentDetails extends Component {
    render() {
        return (
            <Card style={{ width: '30rem' }}>
                <Card.Header>{this.props.author} at {this.props.time}</Card.Header>
                <Card.Body>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
