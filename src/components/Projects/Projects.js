import React, {useState, useEffect, useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import yetiSetGo from "../../Assets/Projects/YetiSetGo/logo1.jpg";
import honeyHeist from "../../Assets/Projects/HoneyHeist/startScreen.png";
import FsLightbox from "fslightbox-react";
import { BsImages } from "react-icons/bs";
import Galleries from "../../Assets/Projects/Galleries";

function Projects() {
  const [toggler, setToggler] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState("YetiSetGo");
  const firstRender = useRef(true);
  
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setToggler(!toggler)
  }, [lightboxIndex])


  function updateGallery(index) {
    let temp = lightboxIndex;
    setLightboxIndex(index);
    if (temp === index) {
      setToggler(!toggler);
    }
  }

  return (
    <Container fluid className="project-section">
      <FsLightbox
        toggler={toggler}
        sources={Galleries[lightboxIndex]}
        key={lightboxIndex}
      />
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
              imgPath={Galleries["PhaserGame"][0]}
              title="Phaser Game"
              description="A prototype game I am developing by myself using the Phaser game engine 
              with typescript. Available on this website to make playtesting easier."
              galleryClick={() => updateGallery("PhaserGame")}
              gameLink="/PhaserGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={yetiSetGo}
              isBlog={false}
              title="Yeti Set Go!"
              description="A multiplayer platforming game for mobile devices developed using
                the Cornell University Game Library (CUGL) engine. 1 person plays as a Yeti that
                is defending their mountain, while up to 4 other players try to climb the mountain 
                and destroy the Crystal at the top."
              ghLink="#"
              githubAvailable={false}
              galleryClick={() => updateGallery("YetiSetGo")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={honeyHeist}
              isBlog={false}
              title="Honey Heist"
              description="A puzzle platforming game for desktop computers developed using the 
                LibGDX game engine. Play as an ant trying to loot the honey hidden within the
                center of a beehive. Navigate the complex maze by rotating the hive and letting
                gravity do all the work."
              ghLink="https://github.com/KiryuSakakibara/HoneyHeist"
              githubAvailable={true}
              galleryClick={() => updateGallery("HoneyHeist")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={Galleries["ShaggyGame"][0]}
              isBlog={false}
              title="Shaggy Game"
              description="A bullet-hell game developed for PC in Unity. Inspired by the 
                'Ultra Instinct Shaggy' meme, dodge and fight against Shaggy from Scooby Doo as he
                shoots a barrage of deadly bullets in space. Made for fun, not meant to be published."
              ghLink="https://github.com/KiryuSakakibara/Shaggy-Game"
              githubAvailable={true}
              galleryClick={() => updateGallery("ShaggyGame")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={Galleries["SpoilerAlert"][0]}
              isBlog={false}
              title="Spoiler Alert!"
              description="A conceptual refrigerator software that reduces food waste by using
              neural networks to identify what foods are about to expire and letting the user know
              to use them soon. Made during a hackathon at Cornell University with React for the 
              interface and PyTorch for the AI."
              ghLink="https://github.com/KiryuSakakibara/BRH2022"
              githubAvailable={true}
              devpostLink="https://devpost.com/software/spoiler-alert-duvxz4"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
