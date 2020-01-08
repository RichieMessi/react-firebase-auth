import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authAction';


class SignUpComponent extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.warn(this.state)
        this.props.signUp(this.state)
    }
  render() {
    const { auth, authError } = this.props
    if(auth.uid) {
        return <Redirect to="/"></Redirect>
      }
    return (
            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <form onSubmit={this.handleSubmit} className="grey lighten-4">
                            <div className="container">
                            <h5 className="grey-text">Sign Up</h5>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn x amber darken-4 z-depth-0">Sign Up</button>
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent) 