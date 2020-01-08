import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

const SignedInLinksComponent = (props) => {
  
  return (
    <div>
      <ul className="right">
          <li>
              <NavLink  to="/create">New Project</NavLink>
          </li>
          <li>
              <a onClick={props.signOut}>Log Out</a>
          </li>
          <li>
              {/* <NavLink to="/" className="btn btn-floating grey darken-3">RM</NavLink> */}
              <NavLink to="/" className="btn btn-floating grey darken-3">{props.profile.initials}</NavLink>
          </li>
          {/* <li>
              <a className="indigo btn-floating grey darken-3 z-depth-0" href="#">
                <i className="material-icons">person</i>
              </a>
          </li> */}
          <li>
              <a className=" btn-floating notification grey darken-3 z-depth-0" href="#">
                <i className="material-icons">notifications</i>
              </a>
              <span className="badge new white-text amber darken-3 ">5</span>
          </li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinksComponent)