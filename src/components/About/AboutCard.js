import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhaval Vaish </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I'm currently pursuing BCA and actively working on real-world tech projects in the fields of Cybersecurity, IoT, and Blockchain.

            <br />
            I’m the founder of the Cyber Intelligence Community — where I bring students and professionals together to explore cybersecurity through sessions, CTFs, and practical learning.

            <br />
            I’ve also been a finalist at HackIITK and have worked on projects involving smart automation, ML-powered bot detection, and secure app development.

            <br />
            Apart from this, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Exploring Tech Tools & Cyber Challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> ✍️ Mentoring & Sharing Knowledge in Communities
            </li>
            <li className="about-activity">
              <ImPointRight /> 🧭 Travelling and Learning from New Experiences
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aim to learn deeply, build boldly, and solve what truly matters."{" "}
          </p>
          <footer className="blockquote-footer">Dhaval</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
