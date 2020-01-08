import React from 'react'
import moment from 'moment';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

function ProjectDetailsComponent (props) {

    // const {match: {params: {id}}} = props

  const { project, auth } = props;

    if(!auth.uid) {
        return <Redirect to="/signin"></Redirect>
    }
  if (project) {
    return (
<div className="row">
          <div className="col s8">
    <div className="project-list section">
        <div className="container">
      <div className="card z-depth-0 grey lighten-5 project-summary">
          <div className="card-content">
              {/* <a href="#" className="btn btn-floating right  amber darken-1 z-depth-0">{id}</a> */}
              <h5 className="card-title amber-text text-darken-3">{project.title}</h5>
              <p className="lead">{project.content}</p>
          </div>
          <div className="card-action">
              <p className="grey-text">Posted by {project.authorFirstName} {project.authorLastName}</p>
              <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    </div>
          </div>
      </div>
    )
  }
  else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.warn(state)
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
  )
  (ProjectDetailsComponent)