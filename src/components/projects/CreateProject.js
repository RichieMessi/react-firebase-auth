import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProjectComponent extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.warn(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
  render() {
      const { auth }  = this.props
      if(!auth.uid) {
          return <Redirect to="/signin"></Redirect>
      }
    return (
            <div className="container">
                <div className="row">
                    <div className="col s8">
                        <form onSubmit={this.handleSubmit} className="grey lighten-4">
                            <div className="container">
                                <h5 className="grey-text">Create Project</h5>

                                <div className="input-field">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" onChange={this.handleChange} />
                                </div>

                                <div className="input-field">

                                <label htmlFor="content">Content</label>
                                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                                </div>

                                <input type="submit" value="Create" className="btn amber darken-4 z-depth-0"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectComponent)
