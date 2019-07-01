/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class CarouselComp extends Component {
    render() {
        const { products } = this.props
        const normalizedProducts = products.map(product => ({
            ...product,
            photo: `http://localhost:5000/${product.photo.split('\\').join('/')}`,
        }))

        return (
            <div
                style={{
                    height: '500px',
                    textAlign: 'center',
                    verticalAlign: 'center',
                    borderBottom: '3px solid grey',
                    borderTop: '3px solid grey',
                }}
            >
                <Carousel fade wrap interval={1800}>
                    {normalizedProducts.map(({ _id, title, photo, shortDescription, category }) => (
                        <Carousel.Item key={_id}>
                            <img
                                src={photo}
                                alt={title}
                                style={{ position: 'relative ', width: '520px', height: '350px' }}
                            />
                            <Carousel.Caption>
                                <div>
                                    <h3>{category}</h3>
                                    <p>{shortDescription}</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        )
    }
}
