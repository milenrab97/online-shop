import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { tokenSelector } from '../reducers/auth'
import { loginAction } from '../actions/auth'

class Login extends Component {
    static propTypes = {
        // token: PropTypes.string,
        login: PropTypes.func,
    }

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputChange = inputField => event => {
        this.setState({
            [inputField]: event.target.value,
        })
    }

    login = event => {
        const { username, password } = this.state

        event.preventDefault()
        this.props.login({ username, password })
    }

    render() {
        return (
            <div style={{ width: '400px', margin: '30px auto', backgroundColor: '#F8F9FA', padding: '15px' }}>
                <Form>
                    <Form.Group controlId="fromBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="username"
                            placeholder="Enter username"
                            onChange={this.handleInputChange('username')}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            onChange={this.handleInputChange('password')}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.login}>
                        Login
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
)(Login)
