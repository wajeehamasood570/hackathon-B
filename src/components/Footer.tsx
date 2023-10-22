import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-secondary text-white p-3"
    style={{
      position:"absolute",
      bottom:"0",
      width:"100%",
    }}>
      <Container>
        <h4 className="text-center m-0">All Rights Reserved @2023</h4>
      </Container>
    </div>
  );
};

export default Footer;
