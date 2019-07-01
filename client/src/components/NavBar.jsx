/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, FormControl, Navbar, Nav } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                        Online-Shop
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-spacing">
                        <Navbar.Text>
                            <Link to="/login">Login</Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/productlisting">Products</Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/add-product">Add Product</Link>
                        </Navbar.Text>
                    </Nav>

                    <Form inline>
                        <Link to="/Cart">Cart</Link>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        <Button variant="danger" style={{ marginLeft: '10px' }}>
                            Logout
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
