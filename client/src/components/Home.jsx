/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { productsSelector } from '../reducers/products'
import Carousel from './CarouselComp'
import { fetchProductsAction } from './../actions/products'

export class Home extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const { products } = this.props

        return (
            <div style={{ height: '50%', width: '70%', paddingLeft: '30%', paddingTop: '50px' }}>
                <Carousel {...{ products: products.slice(0, 3) }} />
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
    }
)(Home)
