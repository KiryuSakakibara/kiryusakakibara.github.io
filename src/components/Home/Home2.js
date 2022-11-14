import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> A QUICK INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              My mission is to create inspiring experiences for people, whether it
              be by crafting video games or by developing important software.
              <br />
              <br />
              To accomplish this, I...
              <ul>
                <li>Became fluent in programming languages, such as
                  <i><b className="purple"> C++, Java, Javascript, and Python</b></i>
                </li>
                <li>Learned to use developer tools, like
                  <i><b className="purple"> Unity, Node, Git, and React</b></i>
                </li>
                <li>Enrolled in relevant univeristy classes, including
                  <i><b className="purple"> Game Design, Computer Graphics, and AI</b></i>
                </li>
                <li>Studied game design concepts, namely
                  <i><b className="purple"> Character Design and Digital Music</b></i>
                </li>
              </ul>
              <br />
              I am constantly learning and looking for new ways to inspire not just others, but 
              myself as well!
              <br />
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KiryuSakakibara"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/*
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kiryusakakibara/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/*
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
