import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Slack Clone",
      description:
        "Instant messaging web application with a business focus. Provides control, organization and communication between users.",
      imgUrl:
        "https://res.cloudinary.com/dho6leigc/image/upload/v1659064574/slack-cap_ctrxye.png",
      githubUrl: "https://github.com/edsanol/clone-slack-react",
      demoUrl: "https://main--clone-slack-top22.netlify.app",
    },
    {
      title: "Good Food",
      description: "Online food ordering and delivery web and mobile app",
      imgUrl:
        "https://res.cloudinary.com/dho6leigc/image/upload/v1659065155/Captura_oqaleh.png",
      githubUrlWeb: "https://github.com/edsanol/GoodFood-react",
      githubUrlMovil: "https://github.com/edsanol/GoodFood-react-native",
      demoUrlWeb: "https://good-food-topv22.netlify.app",
      demoUrlMovil:
        "https://drive.google.com/file/d/1X5-Z7C24BXRPk0Xo7fEygfrsH3xckasP/view?usp=sharing",
    },
    {
      title: "Ultrasonic Levitator",
      description:
        "Control of particle position with artificial vision in an ultrasonic wave levitator",
      imgUrl:
        "https://res.cloudinary.com/dho6leigc/image/upload/v1659065633/lev_xagwsn.png",
      githubUrl: "https://github.com/edsanol/levitador-ultrasonico",
      demoUrl:
        "https://drive.google.com/drive/folders/1a2_YR97QL0CVfiuOYqJJ27zj9dIS2s3I?usp=sharing",
    },
    {
      title: "sales system",
      description:
        "sales systems and inventory control to company in the commercial sector La Bodega de la Moda",
      imgUrl: "https://i.postimg.cc/Fz0YwjRf/Menu-principal.jpg",
      // githubUrl: "https://github.com/edsanol/levitador-ultrasonico",
      demoUrl:
        "https://drive.google.com/drive/folders/1DQmiEX1zU6oH7IGQJO7QQPcef5cJCWLz?usp=sharing",
    },
    {
      title: "cartesian manipulator",
      description:
        "kinematic and dynamic programming and simulation of a cartesian robot with six degrees of freedom",
      imgUrl:
        "https://res.cloudinary.com/dho6leigc/image/upload/v1659894081/Manipulador_Cartesiano_Cap_eehjmf.jpg",
      githubUrl: "https://github.com/edsanol/manipulador-cartesiano",
      demoUrl:
        "https://res.cloudinary.com/dho6leigc/video/upload/v1659843488/manipulador-cartesiano-video_weQOMyxn_ywxozm.mp4",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>These are the most important projects I have developed</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
