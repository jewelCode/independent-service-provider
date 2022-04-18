import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {id, name, description, img, price} = props.service;

    const navigate = useNavigate();

    const handleServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className="col-md-4 col-sm-12 g-4">
            <Card className="h-100 col-6 mx-auto" style={{ width: '18rem' }}>
                <Card.Img className="w-75 mx-auto" variant="top" src={img}/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title style={{color: '#083358'}}> {name}</Card.Title>
                    <Card.Text style={{color: '#0D63A5'}}>
                            {description}
                    </Card.Text>
                    <h6 style={{color: '#0D63A5'}}>Consultancy Fee: $ {price}</h6>
                    <Button className="mt-auto" onClick={()=>handleServiceDetail(id)} variant="warning">Take Appointment</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;