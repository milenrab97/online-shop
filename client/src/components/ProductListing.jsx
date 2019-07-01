/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { productsSelector } from '../reducers/products'
import { fetchProductsAction } from './../actions/products'

export class ProductListing extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const { products } = this.props
        const normalizedProducts = products.map(product => ({
            ...product,
            photo: `http://localhost:5000/${product.photo.split('\\').join('/')}`,
        }))

        return (
            <Container>
                <Row>
                    {/* <Col sm={8}> */}
                    {normalizedProducts.map(product => (
                        <Card style={{ width: '18rem' }} key={product._id}>
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
                                <Button variant="primary">ADD TO CART</Button>
                            </Card.Body>
                        </Card>
                    ))}
                    {/* </Col> */}
                </Row>
            </Container>
        )
    }
}

export default connect(
    state => ({
        products: productsSelector(state),
    }),
    {
        fetchProducts: fetchProductsAction,
    }
)(ProductListing)
