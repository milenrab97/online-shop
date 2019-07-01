/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap'
import { productSelector, commentsSelector } from '../reducers/products'
import Comments from './Comments'
import { fetchProductDetailsAction } from './../actions/products'

export class ProductDetails extends PureComponent {
    componentDidMount() {
        const {
            fetchProductDetails,
            match: {
                params: { id },
            },
        } = this.props

        fetchProductDetails({ productId: id })
    }

    render() {
        const { product, comments } = this.props

        const photo = product.photo ? `http://localhost:5000/${product.photo.split('\\').join('/')}` : null

        return (
            <Container style={{ paddingTop: '2rem' }}>
                <Row>
                    <Col>
                        <Image style={{ height: '100%' }} src={photo} fluid />
                    </Col>
                    <Col xs={6}>
                        <Card style={{ width: '100%', height: '100%' }}>
                            <Card.Header>
                                <Card.Title>{product.title}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text>Price : {product.price} lv</Card.Text>
                                <Button variant="primary" block>
                                    Add to Cart
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ padding: '2rem' }}>
                    <Col xs={6}>
                        <Comments comments={comments} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(
    state => ({
        product: productSelector(state),
        comments: commentsSelector(state),
    }),
    {
        fetchProductDetails: fetchProductDetailsAction,
    }
)(ProductDetails)
