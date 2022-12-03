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
    setToggler(!toggler);
  }, [lightboxIndex])


  function updateGallery(index) {
    let temp = lightboxIndex;
    setLightboxIndex(index);
    if (temp == index) {
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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              githubAvailable={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
