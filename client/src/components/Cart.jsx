import React, { Component } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            price: 0,
        }
    }

    renderCart = () => {
        let test = [
            {
                name: 'test',
                price: 12391,
            },
            {
                name: 'kur',
                price: 1031320,
            },
        ]

        return test.map(product => {
            return (
                <Card style={{ width: '20rem' }} block>
                    <Card.Header> Name : {product.name}</Card.Header>
                    <Card.Text>Price : {product.price}</Card.Text>
                </Card>
            )
        })
    }

    render() {
        return (
            <div>
                <Container style={{ padding: '15px' }}>
                    <Row>
                        <Col>
                            <div>{this.renderCart()}</div>
                            <Button variant="primary" style={{ width: '318px' }} type="submit">
                                Purchase
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
