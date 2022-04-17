import React from 'react';
import lawyer from '../../../resources/lawyer.jpg'

const Main = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1 className="display-1">Shan's Lawyer Service</h1>
                    <p className="display-6">Efficient Lawyer in your Hand</p>
                    <button className="btn btn-danger">About Me</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={lawyer} alt="" />
                </div>
            </div>   
        </div>
    );
};

export default Main;