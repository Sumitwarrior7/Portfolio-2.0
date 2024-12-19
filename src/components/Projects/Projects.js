import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import agrokart from "../../Assets/Projects/agrokart_pic.png"
import pathFinder from "../../Assets/Projects/path_finder_pic.png"
import secureVoting from "../../Assets/Projects/secure_votic_pic.png"
import mechBot from "../../Assets/Projects/mech_assistant.png"

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
              imgPath={agrokart}
              isBlog={false}
              title="Agrokart"
              description="Agrokart is an online platform that connects farmers, corporate buyers, and service providers. Built using React, TailwindCSS, and Node.js, it provides a responsive interface and smooth user experience. Firebase Authentication ensures secure logins, while Firestore serves as the database. Razorpay integration facilitates seamless payment transactions, enhancing interactions between farmers, buyers, and service providers."
              ghLink="https://github.com/Sumitwarrior7/gfg_hackathon"
              demoLink="https://agrokart-gcp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secureVoting}
              isBlog={false}
              title="Secure Voting System"
              description="The Decentralized Voting System using Ethereum Blockchain offers a secure, transparent solution for remote voting, ensuring anonymity and preventing fraud. By leveraging Smart Contracts and a decentralized architecture, it streamlines transactions, removes intermediaries, and improves security, reducing fraud by 40%. A Web3 API integration further enhances communication with Smart Contracts, creating a trustworthy and tamper-proof voting experience."
              ghLink="https://github.com/Sumitwarrior7/Secure-Voting-System"
              demoLink="https://github.com/Sumitwarrior7/Secure-Voting-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathFinder}
              isBlog={false}
              title="Path Finder"
              description="Path Finder is a project that visualizes graph algorithms like Dijkstra, BFS, DFS, and Best First Search, helping users understand how these algorithms work step by step. It features random maze generation, and tracks path nodes and visited nodes, offering an interactive experience to explore and learn pathfinding techniques."
              ghLink="https://github.com/Sumitwarrior7/path_finder"
              demoLink="https://pathfinder-sumitwarrior7s-projects.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mechBot}
              isBlog={false}
              title="Mechanical Assistant"
              description="Mechanical Assistant is a chatbot built using the LLAMA LLM model with RAG implementation. Leveraging LlamaIndex and Streamlit, it features an interactive interface for efficient QA specific to mechanical engineering, enhancing user experience and knowledge retrieval."
              ghLink="https://github.com/Sumitwarrior7/Mechanical-Assistant"
              demoLink="https://github.com/Sumitwarrior7/Mechanical-Assistant"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
