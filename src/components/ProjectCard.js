import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  demoUrl,
  githubUrlWeb,
  githubUrlMovil,
  demoUrlWeb,
  demoUrlMovil,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      {title === "Good Food" ? (
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div>
              <div className="proj__div-container">
                <a
                  className="link__goodfood-web"
                  href={demoUrlWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Project
                </a>
                <a
                  className="link__goodfood-web"
                  href={demoUrlMovil}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mobile Project
                </a>
              </div>
              <div className="proj__div-container">
                <a
                  className="link__goodfood-web"
                  href={githubUrlWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub web
                </a>
                <a
                  className="link__goodfood-web"
                  href={githubUrlMovil}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub mobile
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div>
              <div className="proj__div-container">
                <a
                  className="link__goodfood-web"
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  className="link__goodfood-web"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub web
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Col>
  );
};
