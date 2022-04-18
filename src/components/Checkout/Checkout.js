import React from 'react';
import { Button, Form } from 'react-bootstrap';


const CheckOut = () => {
   
    return (
        <div className="container w-50 mt-5">
            <h3 className="text-center text-danger">Checkout Details</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Billing Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <h3 className="text-center text-danger">Payment Information</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Your Credit Card Number" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Expire Date</Form.Label>
                    <Form.Control type="number" placeholder="Expire Date" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>CCV</Form.Label>
                    <Form.Control type="number" placeholder="CCV Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Checkout
                </Button>
                <br /><br />
                <Button variant="warning" type="submit">
                    Back to Homepage
                </Button>
                </Form>
        </div>
    );
};

export default CheckOut;