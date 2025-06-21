// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <i className="devicon-fastapi-plain "></i> <br />
//         <i class="devicon-cplusplus-plain colored"></i>
//         <i class="devicon-html5-plain colored"></i>
//         <i class="devicon-css3-plain colored"></i>
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;

/* src/components/Techstack.jsx */

// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import NMap from "../../Assets/ChatGPT Image Jun 20, 2025, 11_22_35 PM.png";
// import Cpp from "../../Assets/ChatGPT Image Jun 21, 2025, 02_41_42 PM.png"
// /* helper so markup stays tidy */
// const Devicon = ({ name }) => (
//   <i
//     className={`devicon-${name}-plain `}
//     style={{ fontSize: "60px" }}
//   />
// );

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//       <img src={NMap} height="80px" width="80px" />
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//       <img src={Cpp} height="80px" width="80px" />
//       </Col>
      
//     </Row>
//   );
// }

// export default Techstack;
import React from "react";
import { Row, Col } from "react-bootstrap";
import NMap from "../../Assets/ChatGPT Image Jun 20, 2025, 11_22_35 PM.png";
import Cpp from "../../Assets/ChatGPT Image Jun 21, 2025, 02_41_42 PM.png";
import HTML from "../../Assets/ChatGPT Image Jun 21, 2025, 03_08_30 PM.png";
import CSS from "../../Assets/ChatGPT Image Jun 21, 2025, 03_13_54 PM.png";
import JS from "../../Assets/ChatGPT Image Jun 21, 2025, 03_17_34 PM.png";
import Python from "../../Assets/ChatGPT Image Jun 21, 2025, 03_19_46 PM.png";
import PowerShell from "../../Assets/ChatGPT Image Jun 21, 2025, 03_21_49 PM.png";
import Bash from "../../Assets/ChatGPT Image Jun 21, 2025, 03_23_14 PM.png";
import BurpSuite from "../../Assets/ChatGPT Image Jun 21, 2025, 03_24_41 PM.png";
import Arduino from "../../Assets/ChatGPT Image Jun 21, 2025, 03_26_48 PM.png";
import RaspberryPi from "../../Assets/ChatGPT Image Jun 21, 2025, 03_29_51 PM.png";
import ESP from "../../Assets/ChatGPT Image Jun 21, 2025, 03_34_25 PM.png";
import Canva from "../../Assets/Canva.jpg"
import IoT from "../../Assets/ChatGPT Image Jun 21, 2025, 03_56_51 PM.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={NMap} height="80px" width="80px" alt="NMap" />
      </Col>

      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={Cpp} height="80px" width="80px" alt="Cpp" />
      </Col>

      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={HTML} height="80px" width="80px" alt="HTML" />
      </Col>

      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={CSS} height="80px" width="80px" alt="CSS" />
      </Col>
      
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={JS} height="80px" width="80px" alt="JavaScript" />      
      </Col>
      
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={Python} height="80px" width="80px" alt="Python" />  
      </Col>
      
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={PowerShell} height="80px" width="80px" alt="PowerShell" />
      </Col>
      
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={Bash} height="80px" width="80px" alt="Bash" />
      </Col>

      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={BurpSuite} height="80px" width="80px" alt="Burp Suite" />   
      </Col>
      
      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={Arduino} height="80px" width="80px" alt="Arduino" />  
      </Col>

      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={RaspberryPi} height="80px" width="80px" alt="Raspberry Pi" />   
      </Col>

      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={ESP} height="80px" width="80px" alt="ESP" />  
      </Col>

      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={Canva} height="80px" width="80px" alt="Canva" />  
      </Col>

      <Col xs={12} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
        <img src={IoT} height="80px" width="80px" alt="IoT" />  
      </Col>
    </Row>
  );
}

export default Techstack;