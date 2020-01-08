import React from 'react'
import ProjectSummarytComponent from './ProjectSummary';

import { Link } from 'react-router-dom'; 


function ProjectListComponent ({ projects }) {

  // console.warn(projects)

  // const projectItem = projects && projects.map((project, key) => {
  //   return <ProjectSummarytComponent project={project} key={key} />
  // });

  if(projects) {
    return (
    <div className="project-list section">
      { projects && projects.map((project) => {
        return (
            <ProjectSummarytComponent project={project} key={project.id}/>
          )
      })
      }
    </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project... from project list</p>
      </div>
    )
  }
}

export default ProjectListComponent