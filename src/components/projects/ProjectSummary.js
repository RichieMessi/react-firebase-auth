import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectSummarytComponent = (props) => {
  const { project } = props
  if(project) {
    const {title} = project
    return (
      <div className="row">
        <div className="col s12">
      <div className="project-list section">
        <div className="card z-depth-0  lighten-5 project-summary">
            <div className="card-content">
                <span className="card-title amber-text text-darken-3">{title}</span>
                <p className="grey-text">Posted by the {project.authorFirstName} {project.authorLastName}</p>
                {/* <p className="grey-text">3rd September, 2am</p> */}
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
            <div className="card-action">
              <Link  className="btn amber darken-3 z-depth-0" to={'/project/'+project.id}>
              Details
              </Link>
            </div>
        </div>
      </div>
        </div>
      </div>
    )
  } else {
    // console.warn(project);
    return (
      <div className="container center">
        <p>Loading project... from project summary</p>
      </div>
    )
  }
}


export default ProjectSummarytComponent