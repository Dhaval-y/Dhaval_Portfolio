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

import React from "react";
import { Row, Col } from "react-bootstrap";
import NMap from "../../Assets/ChatGPT Image Jun 20, 2025, 11_22_35 PM.png";
/* helper so markup stays tidy */
const Devicon = ({ name }) => (
  <i
    className={`devicon-${name}-plain `}
    style={{ fontSize: "60px" }}
  />
);

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={NMap} height="80px" width="80px" />
      </Col>
      
    </Row>
  );
}

export default Techstack;
