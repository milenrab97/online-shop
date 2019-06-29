import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

export default class Commerce extends Component {
    render() {
        return (
            <div>
                {/* Home */}
                <Route path="/" exact component={Home} />
            </div>
        )
    }
}
