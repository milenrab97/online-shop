import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap'
import Comments from './Comments'
import { fetchProductsAction } from './../actions/products'

export class ProductDetails extends PureComponent {
    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        this.props.fetchProducts()
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Image
                            style={{ height: '100%' }}
                            src="https://cdn-images-1.medium.com/max/711/1*jhD-rWxuFvo17Q1Mw6LuEw.jpeg"
                            fluid
                        />
                    </Col>
                    <Col xs={6}>
                        <Card style={{ width: '100%', height: '100%' }}>
                            <Card.Header>
                                <Card.Title>Name of the product</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Description of the Product</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text>Price : 1000 lea</Card.Text>
                                <Button variant="primary" block>
                                    Add to Cart
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ 'padding-top': '2rem' }}>
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
        token: 'token',
    }),
    {
        fetchProducts: fetchProductsAction,
    }
)(ProductDetails)
