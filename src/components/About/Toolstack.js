import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import Linux from "../../Assets/ChatGPT Image Jun 21, 2025, 10_52_17 PM.png"
import Metasploi from "../../Assets/ChatGPT Image Jun 21, 2025, 10_57_44 PM.png";
import WireShark from "../../Assets/ChatGPT Image Jun 21, 2025, 11_00_06 PM.png";
import NMap from "../../Assets/ChatGPT Image Jun 20, 2025, 11_22_35 PM.png";
import ArduinoIDE from "../../Assets/ChatGPT Image Jun 21, 2025, 11_07_32 PM.png"
import BurpSuite from "../../Assets/ChatGPT Image Jun 21, 2025, 03_24_41 PM.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
         <img src={Linux} height="80px" width="80px" alt="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={Metasploi} height="80px" width="80px" alt="Metasploit" />
      </Col>
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={WireShark} height="80px" width="80px" alt="Wireshark" />  
      </Col>
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={NMap} height="80px" width="80px" alt="NMap" />
      </Col>
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={ArduinoIDE} height="80px" width="80px" alt="Arduino IDE" /> 
      </Col>
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={BurpSuite} height="80px" width="80px" alt="Burp Suite" />
      </Col>
    </Row>
  );
}

export default Toolstack;
