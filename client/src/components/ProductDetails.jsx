/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap'
import { productSelector } from '../reducers/products'
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
        // const a = this.props.match.params.id
    }

    render() {
        const { product } = this.props

        product.photo = product.photo && `http://localhost:5000/${product.photo.split('\\').join('/')}`

        return (
            <Container style={{ paddingTop: '2rem' }}>
                <Row>
                    <Col>
                        <Image
                            style={{ position: 'relative', paddingLeft: '50px', width: '100rem', height: '230px' }}
                            src={product.photo}
                            fluid
                        />
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
                        <Comments />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(
    state => ({
        product: productSelector(state),
    }),
    {
        fetchProductDetails: fetchProductDetailsAction,
    }
)(ProductDetails)
