import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbBrandWindowsFilled } from "react-icons/tb";
import { SiIntellijidea } from "react-icons/si";
import { FaOpera } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandWindowsFilled />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaOpera />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
    </Row>
  );
}

export default Toolstack;
