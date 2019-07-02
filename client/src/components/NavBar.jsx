/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Navbar, Nav, FormControl } from 'react-bootstrap'
import { logoutAction } from '../actions/auth'
import { userRoleSelector } from '../reducers/auth'

export class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyWord: '',
        }
    }

    handleInputChange = inputField => e => {
        this.setState({
            keyWord: e.target.value,
        })
    }

    render() {
        const { userRole, logout } = this.props

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
                        {!userRole && (
                            <Navbar.Text>
                                <Link to="/login">Login</Link>
                            </Navbar.Text>
                        )}
                        <Navbar.Text>
                            <Link to="/productlisting">Products</Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Link to="/add-product">Add Product</Link>
                        </Navbar.Text>
                    </Nav>

                    <Form inline>
                        <Navbar.Text>
                            <Link to="/cart">Cart</Link>
                        </Navbar.Text>
                        <FormControl
                            type="text"
                            placeholder="Enter category"
                            onChange={this.handleInputChange('search')}
                        />
                        <Link to={'/searchlisting/' + this.state.keyWord}>
                            <Button variant="outline-success" onClick={this.getKeyword}>
                                Search
                            </Button>
                        </Link>
                        {userRole && (
                            <Button variant="danger" style={{ marginLeft: '10px' }} onClick={logout}>
                                Logout
                            </Button>
                        )}
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default connect(
    state => ({
        userRole: userRoleSelector(state),
    }),
    {
        logout: logoutAction,
    }
)(NavBar)
