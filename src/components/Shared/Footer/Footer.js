import React from 'react';

const style = {
  left: "0",
  bottom: "0",
  width: "100%",
//   backgroundColor: "red",
  color: "white",
  textAlign: "center",
};
const Footer = () => {
    return (
        <div style={style} className="p-5 mt-5 bg-danger">
            <h1 className="text-center">This is Footer</h1>
        </div>
    );
};

export default Footer;