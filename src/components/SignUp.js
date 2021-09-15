import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { addUser } from '../actions/addUser'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class SignUp extends React.Component {

    constructor() {
        super()
        this.state = {
            first_name: "",
            last_name: "",
            password: "",
            email: "",
            showModal: true,
            isSubmitted: false
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(this.state)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            isSubmitted: true,
            showModal: false
        })
        this.props.history.push('/home')

    }

    close = () => {
        this.setState({ showModal: false })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <Modal show={this.state.showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Login Or Sign Up!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleOnSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleOnChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleOnChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="name" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleOnChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="name" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleOnChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                  </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default withRouter(connect(null, { addUser })(SignUp))