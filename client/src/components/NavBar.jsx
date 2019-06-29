import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, FormControl, Navbar, Nav } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Online-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/login">Login</Link>
                        <Link to="/productlisting">Products</Link>
                        <Nav.Link href="#link">LOKO SOFIQ</Nav.Link>
                    </Nav>
                    <Form inline>
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
