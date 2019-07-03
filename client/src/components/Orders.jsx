/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, Button } from 'react-bootstrap'
import { fetchOrders } from '../actions/orders'
import { ordersSelector } from '../reducers/orders'
import http from './../services/request'

export class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders()
    }

    render() {
        const { orders } = this.props

        return (
            <div style={{ width: '60%', margin: '30px auto', backgroundColor: '#F8F9FA', padding: '15px' }}>
                {orders.map(order => (
                    <ListGroup variant="flush" key={order._id}>
                        <ListGroup.Item variant="light">
                            Order id: {order._id},<br />
                            >Order status: {order.status}
                            <br />
                            >Products: {order.products.join(', ')}
                            <Button
                                style={{ marginLeft: '10px' }}
                                onClick={() => {
                                    http.put(`/api/users/orders/${order._id}/approve`).then(() => {
                                        this.props.fetchOrders()
                                    })
                                }}
                            >
                                Approve
                            </Button>
                            <Button
                                style={{ marginLeft: '10px' }}
                                variant="danger"
                                onClick={() => {
                                    http.delete(`/api/users/orders/${order._id}`).then(() => {
                                        this.props.fetchOrders()
                                    })
                                }}
                            >
                                Decline
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </div>
        )
    }
}

export default connect(
    state => ({
        orders: ordersSelector(state),
    }),
    {
        fetchOrders,
    }
)(Orders)
