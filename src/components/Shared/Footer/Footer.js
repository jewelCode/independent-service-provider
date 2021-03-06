import React from 'react';

const footer = {
  left: "0",
  bottom: "0",
  width: "100%",
  height: "300px",
  color: "white",
  textAlign: "center",
  backgroundColor: "#001F3F",
};
const Footer = () => {
    return (
        <div style={footer} className="p-5 mt-5">
            <div className="row">
                  <div className="col-md-4 col-sm-12">
                      <h3>Chamber</h3>
                      <p>71 Court Hill</p>
                      <p>Court Road, Beside Bangladesh Bank</p>
                      <p>Kotwali, Chittagong</p>
                  </div>
                  <div className="col-md-4 col-sm-12">
                      <h3>Around The Web</h3>
                      <h6>Facebook</h6>
                      <h6>Twiter</h6>
                      <h6>Linked In</h6>
                      <h6>Google</h6>
                  </div>
                  <div className="col-md-4 col-sm-12">
                  <h3>Contact</h3>
                      <h6>Mobile: 01920666327</h6>
                      <h6>Email: jewelbarua101@gmail.com</h6>
                      <h6>Fax: +880-865212515</h6>
                  </div>
            </div>
        </div>
    );
};

export default Footer;