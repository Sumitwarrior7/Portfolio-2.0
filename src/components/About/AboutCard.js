import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumit Ghosh </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am currently in my final year pursuing mechanical engg at IIT BHU.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports like football
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It’s not who I am underneath, but what I do that defines me!"{" "}
          </p>
          <footer className="blockquote-footer">Sumitwarrior7</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
