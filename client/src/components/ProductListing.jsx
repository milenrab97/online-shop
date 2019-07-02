/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Container, Row, Dropdown } from 'react-bootstrap'
import { productsSelector } from '../reducers/products'
import { fetchCartAction, addToCartAction } from '../actions/cart'
import { fetchProductsAction } from './../actions/products'

export class ProductListing extends Component {
    componentDidMount() {
        this.props.fetchProducts()
        this.props.fetchCart()
    }

    render() {
        const { products, addToCart } = this.props
        const normalizedProducts = products.map(product => ({
            ...product,
            photo: `http://localhost:5000/${product.photo.split('\\').join('/')}`,
        }))

        return (
            <div>
                <div>
                    <Dropdown style={{ padding: '5px' }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Categories
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {['Dildota', 'Vibratori', 'Pedali'].map(category => (
                                <Dropdown.Item href="#/action-1">{category}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Container style={{ padding: '5px' }}>
                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            {/* <Col sm={8}> */}

                            {normalizedProducts.map(product => (
                                <Card style={{ width: '18rem', margin: '0 12px 12px 0' }} key={product._id}>
                                    <Card.Img
                                        style={{
                                            position: 'relative',
                                            width: '288px',
                                            height: '180px',
                                            padding: '5px',
                                            cursor: 'pointer',
                                        }}
                                        variant="top"
                                        src={`${product.photo}`}
                                        onClick={() => this.props.history.push(`/product-details/${product._id}`)}
                                    />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.shortDescription}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button
                                            variant="primary"
                                            block
                                            onClick={() => addToCart({ productId: product._id })}
                                        >
                                            ADD TO CART
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            ))}
                            {/* </Col> */}
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        products: productsSelector(state),
    }),
    {
        fetchProducts: fetchProductsAction,
        fetchCart: fetchCartAction,
        addToCart: addToCartAction,
    }
)(ProductListing)
