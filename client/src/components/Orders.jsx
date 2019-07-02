import React, { Component } from 'react'
import { ListGroup, Button } from 'react-bootstrap'

export default class Orders extends Component {
    render() {
        return (
            <div>
                {[
                    {
                        name: 'Pesho',
                        products: ['pishka', 'pishka2'],
                        status: 'pending',
                        time: '10 chasa',
                    },
                ].map(order => (
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="light">
                            Order name : {order.name}, Order status : {order.status}
                            <Button style={{ marginLeft: '10px' }}>Approve</Button>
                            <Button style={{ marginLeft: '10px' }} variant="danger">
                                Decline
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </div>
        )
    }
}
