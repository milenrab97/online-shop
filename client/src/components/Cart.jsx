/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { cartSelector } from '../reducers/cart'
import { fetchCartAction } from '../actions/cart'

export class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            price: 0,
        }
    }

    componentDidMount() {
        this.props.fetchCart()
    }

    render() {
        const { cart } = this.props
        console.log('cart', cart)

        return (
            <div>
                <Container style={{ padding: '15px' }}>
                    <Row>
                        <Col>
                            <div>
                                {cart.map(product => {
                                    return (
                                        <Card style={{ width: '20rem' }} block>
                                            <Card.Header> Title : {product.title}</Card.Header>
                                            <Card.Text>Price : {product.price}</Card.Text>
                                        </Card>
                                    )
                                })}
                            </div>
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

export default connect(
    state => ({
        cart: cartSelector(state),
    }),
    {
        fetchCart: fetchCartAction,
    }
)(Cart)
