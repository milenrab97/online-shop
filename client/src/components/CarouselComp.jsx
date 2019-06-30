import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class CarouselComp extends Component {
    renderingCarousel = () => {
        let test = [
            'https://f4.bcbits.com/img/a2985427437_16.jpg',
            'http://hiphopsince1987.com/wp-content/uploads/2015/08/kur-see-thru-HHS1987-2015.jpg',
        ]

        return test.map(image => {
            return (
                <Carousel.Item>
                    <img className="d-block w-100" src={image} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }

    render() {
        return (
            <div>
                <Carousel>{this.renderingCarousel()}</Carousel>
            </div>
        )
    }
}
