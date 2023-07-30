import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Timeline from "./Timeline";
import { TbTimeline } from "react-icons/tb";

function AboutCard() {
  return (
    <>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              I am Sreejith, from Thrissur, Kerala. I am a fresher. I have
              completed MCA in the year 2023 from APJ Abdul Kalam Technological
              University.
            </p>
           {/*  <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Tech Blogs
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul> */}

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>

            <footer className="blockquote-footer">Sreejith K M</footer>
          </blockquote>
        </Card.Body>
      </Card>
    <br />
    <br />
    <br /><br /><br />
    
        
    </>
  );
}

export default AboutCard;
