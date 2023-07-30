import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsImages } from "react-icons/bs";
import {SiDevpost} from "react-icons/si"
import {IoGameController} from "react-icons/io5"
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img className="project-image" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            disabled={!props.githubAvailable}
          >
            <BsGithub/> &nbsp;
            GitHub
          </Button>
        )}
        
        
        {"\n"}
        {"\n"}

        {props.gameLink && (
            <Button
              variant="primary"
              as={Link}
              to="/PhaserGame"
              style={{marginLeft: "10px"}}
            >
              <IoGameController /> &nbsp;
              Play
            </Button>
        )}

        {props.galleryClick && (
          <Button
            variant="primary"
            style={{ marginLeft: "10px" }}
            onClick={props.galleryClick}
          >
            <BsImages /> &nbsp;
            Gallery
          </Button>
        )}

        {"\n"}
        {"\n"}

        {props.devpostLink && (
          <Button
            variant="primary"
            href={props.devpostLink}
            target="_blank"
            style={{marginLeft: "10px"}}
          >
            <SiDevpost/> &nbsp;
            Devpost
          </Button>
        )}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
