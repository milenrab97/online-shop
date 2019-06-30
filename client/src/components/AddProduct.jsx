import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { tokenSelector } from '../reducers/auth'
import { loginAction } from '../actions/auth'
import http from './../services/request'

class AddProduct extends Component {
    static propTypes = {
        // token: PropTypes.string,
        // login: PropTypes.func,
    }

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            photo: null,
            shortDescription: '',
            description: '',
            price: 0,
            category: '',
        }
    }

    handleInputChange = inputField => event => {
        this.setState({
            [inputField]: inputField === 'price' ? Number(event.target.value) : event.target.value,
        })
    }

    handlePhotoInputChange = event => {
        this.setState({
            photo: event.target.files[0],
        })
    }

    addProduct = event => {
        const { photo, title, shortDescription, description, price, category } = this.state

        event.preventDefault()

        // eslint-disable-next-line no-undef
        const data = new FormData()

        data.append('title', title)
        data.append('shortDescription', shortDescription)
        data.append('description', description)
        data.append('price', price)
        data.append('category', category)
        data.append('photo', photo)
        http.post('/api/products', data, {
            headers: { 'content-type': 'multipart/form-data' },
        })

        // this.props.login({ username, password })
    }

    render() {
        return (
            <div style={{ width: '400px', marginLeft: '30px' }}>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="title"
                            placeholder="Enter title"
                            onChange={this.handleInputChange('title')}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="file" name="file" id="exampleFile" onChange={this.handlePhotoInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formShortDescr">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter short descr"
                            onChange={this.handleInputChange('shortDescription')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescr">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter descr"
                            onChange={this.handleInputChange('description')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter category"
                            onChange={this.handleInputChange('category')}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            onChange={this.handleInputChange('price')}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.addProduct}>
                        Add
                    </Button>
                </Form>
            </div>
        )
    }
}

export default connect(
    state => ({
        token: tokenSelector(state),
    }),
    {
        login: loginAction,
    }
)(AddProduct)
