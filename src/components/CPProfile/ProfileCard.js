import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProfileCard(props) {
  return (
    <Card className="profile-card-view" style={{ margin: "1rem", borderRadius: "10px", overflow: "hidden" }}>
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="profile-img" 
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>
          {props.username}
        </Card.Title>
        <Card.Text style={{ fontSize: "1rem", color: "gray", textAlign: "center" }}>
          {props.status}
        </Card.Text>
        <Card.Text style={{ fontSize: "1.2rem", fontWeight: "500", textAlign: "center" }}>
          Rating: <bold className="purple">{props.rating}</bold>
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button 
            variant="primary" 
            href={props.profileLink} 
            target="_blank"
            style={{ padding: "0.5rem 1.5rem", fontSize: "1rem" }}
          >
            Visit Profile
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
