import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { productsSelector } from '../reducers/products'
import { fetchCartAction, addToCartAction } from '../actions/cart'
import { fetchProductsAction } from './../actions/products'

export class SearchListing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyWord: this.props.match.params.id,
        }
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.setState({
                keyWord: this.props.match.params.id,
            })
        }
    }

    render() {
        const { products, addToCart } = this.props
        const normalizedProducts = products
            .map(product => ({
                ...product,
                photo: `http://localhost:5000/${product.photo.split('\\').join('/')}`,
            }))
            .filter(product => product.title.includes(this.state.keyWord))

        return (
            <div>
                <div>
                    <Container style={{ padding: '5px' }}>
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
                                        <Button
                                            variant="primary"
                                            block
                                            onClick={() => addToCart({ productId: product._id })}
                                        >
                                            ADD TO CART
                                        </Button>
                                    </Card.Body>
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
)(SearchListing)
