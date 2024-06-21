import project1 from "../images/project/project1.jpg";

export function ProjectCard(props) {
    return(
        <div className="op-project">
          <div className="op-pro-img">
            <img src={project1} alt="project"></img>
          </div>
          <div className="op-pro-detail">
            <div className="op-pro-info">
              <p className="op-prj-title">{props.props.project_name}</p>
              {/* {props.data.projects.projectName} */}
            </div>
            <div className="op-pro-btn">
            </div>
          </div>
        </div>
    );
}