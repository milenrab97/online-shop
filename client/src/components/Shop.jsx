import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import ProductListing from './ProductListing'
import ProductDetails from './ProductDetails'

export default class Shop extends Component {
    render() {
        return (
            <div>
                {/* Home */}
                <Route path="/" exact component={Home} />
                <Route path="/product-details/:id" component={ProductDetails} />
                <Route path="/productlisting" component={ProductListing} />
            </div>
        )
    }
}
