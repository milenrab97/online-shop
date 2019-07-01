import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class CommentDetails extends Component {
    render() {
        return (
            <Card border="info" text="info" style={{ width: '70rem' }}>
                <Card.Header style={{}}>
                    {this.props.author} at {this.props.time}
                </Card.Header>
                <Card.Body>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
