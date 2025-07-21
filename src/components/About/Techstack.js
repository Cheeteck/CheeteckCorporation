import {
TbBrandGolang,
 TbHtml
 } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiModrinth,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiModrinth />, name: "Modrinth" },
    { icon: <FaDiscord />, name: "Discord" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons">
          <div style={{ textAlign: "center", fontFamily: "Lexend" }}>
            <div style={{ fontSize: "2.5rem" }}>{tech.icon}</div>
            <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>{tech.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
