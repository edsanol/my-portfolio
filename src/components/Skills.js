import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Next, I want to show you my hard skills</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659062528/js_q1i6md.png"
                    alt="JavaScript"
                    loading="lazy"
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659062596/react_f7pdei.png"
                    alt="React"
                    loading="lazy"
                  />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063744/html_fuyaq0.png"
                    alt="HTML"
                    loading="lazy"
                  />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063786/css-3_p8wssy.png"
                    alt="CSS"
                    loading="lazy"
                  />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659062659/nodejs_1_loqz2p.png"
                    alt="NodeJS"
                    loading="lazy"
                  />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063891/redux_hkv50b.png"
                    alt="Redux"
                    loading="lazy"
                  />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659062742/typescript_1_f1sjpg.png"
                    alt="TypeScript"
                    loading="lazy"
                  />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659062810/python_hy6few.png"
                    alt="Python"
                    loading="lazy"
                  />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063053/sql-server_uegmkk.png"
                    alt="SQL"
                    loading="lazy"
                  />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063189/mongo_kmhkwd.webp"
                    alt="MongoDB"
                    loading="lazy"
                  />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063263/mongoose_w6utbx.png"
                    alt="Mongoose"
                    loading="lazy"
                  />
                  <h5>Mongoose</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063356/jest-logo_jspiq5.png"
                    alt="Jest"
                    loading="lazy"
                  />
                  <h5>Jest</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063471/cypress_ftpgxc.png"
                    alt="Cypress"
                    loading="lazy"
                  />
                  <h5>Cypress</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063531/git_bqjovi.png"
                    alt="Git"
                    loading="lazy"
                  />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/dho6leigc/image/upload/v1659063672/github_2_rxonk9.png"
                    alt="GitHub"
                    loading="lazy"
                  />
                  <h5>GitHub</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
