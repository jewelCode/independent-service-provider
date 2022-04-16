import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const {id, name, description, img, price} = props.service;
    return (
        <div className="col-lg-4 g-4">
        <Card className="h-100" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>Service Name: {name}</Card.Title>
                <Card.Text>
                        {description}
                </Card.Text>
                <h4>Price: $ {price}</h4>
                <Button variant="danger">Danger</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Service;