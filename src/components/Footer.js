import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY + window.innerHeight;
      const pageHeight = document.body.offsetHeight;
      const distanceFromBottom = pageHeight - scrollPos;

      if (distanceFromBottom < 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className={`footer ${isVisible ? "footer-visible" : "footer-hidden"}`}>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Webtemplate by Soumyajit Behera</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Cheeteck Corporation</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/soumyajit4419" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://twitter.com/cheeteck_" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.youtube.com/@cheeteck/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.instagram.com/soumyajit4419" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
