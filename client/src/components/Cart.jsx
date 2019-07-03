/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { cartSelector } from '../reducers/cart'
import { fetchCartAction, deleteProductFromCartAction } from '../actions/cart'
import { purchaseAction } from '../actions/orders'

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
        const { cart, deleteProductFromCart, purchase } = this.props

        return (
            <div>
                <Container style={{ padding: '15px', display: 'flex', justifyContent: 'center' }}>
                    <Row>
                        <Col>
                            <div>
                                {cart.map(product => {
                                    return (
                                        <Card style={{ width: '20rem' }} block>
                                            <Card.Header> Title : {product.title}</Card.Header>
                                            <Card.Text
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    margin: '10px',
                                                }}
                                            >
                                                Price : {product.price}
                                                <Button
                                                    style={{ marginLeft: '10px' }}
                                                    variant="danger"
                                                    onClick={() => deleteProductFromCart({ productId: product._id })}
                                                >
                                                    X
                                                </Button>
                                            </Card.Text>
                                        </Card>
                                    )
                                })}
                            </div>
                            <Button
                                variant="primary"
                                style={{ width: '318px' }}
                                onClick={() => {
                                    const products = cart.map(({ _id }) => _id)

                                    purchase({ products })
                                }}
                            >
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
        deleteProductFromCart: deleteProductFromCartAction,
        purchase: purchaseAction,
    }
)(Cart)
