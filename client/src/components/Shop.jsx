import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ProductListing from './ProductListing'
import ProductDetails from './ProductDetails'
import AddProduct from './AddProduct'

export default class Shop extends Component {
    render() {
        return (
            <div>
                {/* Home */}
                <Route path="/" exact component={Home} />
                <Route path="/product-details/:id" component={ProductDetails} />
                <Route path="/login" exact component={Login} />
                <Route path="/productlisting" component={ProductListing} />
                <Route path="/add-product" component={AddProduct} />
            </div>
        )
    }
}
