import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function WhisperToggle() {
useEffect(() => {
    document.title = "WhisperToggle | CheetCorp"; // Set your custom title here
  }, []);

  return (
    <section>
     <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
              Welcome to
                <strong className="whispertoggle-color"> WhisperToggle</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <strong className="whispertoggle-color"> WhisperToggle</strong> is a lightweight Fabric client-side mod for Minecraft
                that lets you toggle private message mode with a hotkey.
                Once active, all your chat messages will be automatically whispered to a chosen player. Instead of typing <code>/w [Player]</code> every time.
             </div>
              <div style={{ padding: 50, textAlign: "left" }}>
<h3>Features</h3>
<li>Toggle whisper mode with a single keypress (`H` by default)</li>
<li>Automatically send chat messages as whispers to a selected player</li>
<li>Set your target with <code>/wt [player]</code></li>
<li>Whisper status display above the chat bar when chat is open. So you're always sure its on!</li>
</div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default WhisperToggle;
