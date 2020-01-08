import React, { Component } from 'react'
import ProjectListComponent from '../projects/ProjectList';
import NotificationsComponent from '../notifications/Notifications';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class DashboardComponent extends Component {
  render() {
    // console.log(this.props)
    const { projects, auth } = this.props
    if(!auth.uid) {
      return <Redirect to="/signin"></Redirect>
    }
    return (
      <div className="grey-text">
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectListComponent projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <NotificationsComponent />
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
  )(DashboardComponent)
  
  
  // projects: state.project.projects
// export default 
//   connect(mapStateToProps)
// (DashboardComponent)