import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BotGaurdian"
              description="BotGuardian is an AI-powered project developed during the IIT Kanpur Hackathon (HackIITK) to detect bot-generated profiles on social media. It uses machine learning to analyze user behavior and metadata through user ID or CV input. The system combines a PyTorch model, FastAPI backend, and a React-based frontend to deliver real-time detection results. This project enhances online safety by identifying suspicious accounts with high accuracy.ssages."
              ghLink="https://github.com/pv2k3/BotGuardian.git"
              demoLink="https://botguardian.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Steganography-based Text Encryption"
              description="Steganography-based Image Encryption is a Python project that hides secret text messages inside image files using steganography techniques. It allows secure and undetectable communication by embedding encrypted text within image pixels. The tool ensures confidentiality without altering the visible appearance of the image. A simple GUI/CLI makes the process user-friendly and efficient."
              ghLink="https://github.com/Dhaval-y/Steganography-based-Image-Encryption.git"
              demoLink="https://steganography-image-encryption.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
