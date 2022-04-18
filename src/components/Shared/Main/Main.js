import React from 'react';
import lawyer from '../../../resources/lawyer.jpg'

const Main = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1 style={{color: '#083358'}} className="display-1 text-uppercase font-weight-bold">Shan's Lawyer Service</h1>
                    <h1 style={{color: '#083358'}} className="display-4 font-weight-bold">Advocate Shan Rahman</h1>
                    <p style={{color: '#0D63A5'}}  className="display-6 font-weight-bold">Efficient Lawyer in your Hand</p>
                    <button className="btn btn-warning">About Me</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={lawyer} alt="" />
                </div>
            </div>   
        </div>
    );
};

export default Main;