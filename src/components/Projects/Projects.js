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
              title="Online Birth Certificate Management system"
              description="This is a web application that manages, stores, and retrieves Birth Certificates. This application 
              allows certain organizations to manage their members' Birth Certificates. The application was 
              developed using PHP and MySQL Database."
              ghLink="https://github.com/sreejithkm001/E-BIRTH-CERTIFICATE"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sentiment-Analysis-using-ML"
              description="Sentiment analysis, an important area in Natural Language Processing, is the process of automatically 
              detecting affective states of text. Sentiment analysis is widely applied to voice-of- customer materials 
              such as product reviews in online shopping websites like Amazon, movie reviews or social media."
              ghLink="https://github.com/sreejithkm001/Sentiment-Analysis-using-ML"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio using React JS"
              description="My personal portfolio web-application build with React JS, React bootstrap, React icons,HTML,CSS." 
              ghLink="https://github.com/sreejithkm001/Portfolio-ReactJS"
              
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
