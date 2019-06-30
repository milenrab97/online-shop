import React, { Component } from 'react'
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap'

export default class ProductDetails extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Image
                            src="http://hiphopsince1987.com/wp-content/uploads/2015/08/kur-see-thru-HHS1987-2015.jpg"
                            fluid
                        />
                    </Col>
                    <Col xs={6}>
                        <Card style={{ width: '30rem', height: '28rem' }}>
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
            </Container>
        )
    }
}
