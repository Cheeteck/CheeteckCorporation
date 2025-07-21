import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Cheeteck </span>
            from Denmark
            <br />
            I play wayyyyyyy too much Minecraft
            <br />
            When its summer time and the weather is good i like to play tennis!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading (Nerd)
            </li>
          </ul>

          <p style={{ color: "rgb(191 54 54)" }}>
            "FUCK YOU MEAN WRONG IMPORTS?!"{" "}
          </p>
          <footer className="blockquote-footer">Cheeteck</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
