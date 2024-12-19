import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import cf from "../../Assets/cf.png";
import cc from "../../Assets/cc.png";
import lc from "../../Assets/lc.png";
import lcd from "../../Assets/lc_dashboard.png";

function CPProfile() {
    const url = "https://leetcode.com/u/Z-gen/";
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "20px" }}>
          <strong className="purple">Competitive Programming</strong> Profiles
        </h1>
        {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1> */}
        <p style={{ color: "white", textAlign: "center", fontSize: "1.4rem", marginBottom: "30px" }}>
        Competitive programming is where I turn challenges into opportunities to learn and grow. It has helped me think faster, code smarter, and solve problems efficiently. 
        </p>
        <p style={{ color: "white", textAlign: "center", fontSize: "1.3rem", marginBottom: "30px" }}>
        Check out my profiles below to see my journey through contests and problem-solving adventures
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={4} className="project-card">
            <ProfileCard
              imgPath={cf}
              username="HoLaAmIgOs"
              status="Specialist"
              rating="1418"
              profileLink="https://codeforces.com/profile/HoLaAmIgOs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProfileCard
              imgPath={cc}
              username="dark_knight_47"
              status="3 ★ Coder"
              rating="1702"
              profileLink="https://www.codechef.com/users/dark_knight_47"
            />
          </Col>
        </Row>

        <p style={{ color: "white", textAlign: "center", fontSize: "1.3rem", marginBottom: "30px" }}>
        Take a look at my <strong className="purple">LeetCode</strong> stats below
        </p>

        {/* Adding LeetCode stats image */}
        <div style={{ textAlign: "center", marginBottom: "20px"}}>
          <img
            src={lcd}
            alt="LeetCode Stats"
            style={{ 
                maxWidth: "100%", 
                height: "auto",
                border: "2px solid rgba(129, 72, 144, 0.561)",
                borderRadius: "17px", // Rounded corners
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" // Shadow effect
            }}
          />
        </div>

        {/* Adding button to redirect to LeetCode profile */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Card
            style={{
                display: "inline-flex",  // This ensures the card width adjusts to its content
                margin: "1rem",
                borderRadius: "10px",
                border: "rgba(129, 72, 144, 0.561)",
                overflow: "hidden",
            }}
            >
            <Button
                variant="primary"
                href="https://leetcode.com/u/Z-gen/"
                target="_blank"
                style={{ padding: "0.5rem 1.5rem", fontSize: "1rem" }}
            >
                Visit My LeetCode Profile
            </Button>
            </Card>
        </div>
      </Container>
    </Container>
  );
}

export default CPProfile;
