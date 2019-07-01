import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, FormControl, Navbar, Nav } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Online-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/login">Login</Link>
                        <Link to="/productlisting">Products</Link>
                        <Link to="/add-product">Add Product</Link>
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
