import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';


class SignInComponent extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        // console.warn(e)
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.warn(this.state)
        this.props.signIn(this.state)
    }
  render() {
      const { authError, auth } = this.props
      if(auth.uid) {
        return <Redirect to="/"></Redirect>
      }
    return (
            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <form onSubmit={this.handleSubmit} className="grey lighten-4">
                            <div className="container">
                                <h5 className="grey-text">Sign In</h5>

                                <div className="input-field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" onChange={this.handleChange} />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" onChange={this.handleChange} />
                                </div>
                                
                                <div className="input-field">
                                    <button className="btn x amber darken-4 z-depth-0">Login</button>
                                </div>
                            </div>
                        </form>
                        <div className="red-text">
                            { authError ? <p className="lead">{authError}</p> : null }
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent)