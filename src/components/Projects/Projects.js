import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import whisper from "../../Assets/Projects/whisper.png";

function Projects() {
useEffect(() => {
    document.title = "Projects | CheetCorp"; // Set your custom title here
  }, []);
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
              imgPath={whisper}
              isBlog={false}
              title="WhisperToggle"
              description="Toggle whisper chat to a selected player with /wt and a keybind."
              ghLink="https://github.com/Cheeteck/WhisperToggle/tree/master"
              demoLink="/whispertoggle"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
