import React from 'react'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinksComponent from './SignedInLinks';
import SignedOutLinksComponent from './SignedOutLinks';

const NavbarComponent = (props) => {
  const { auth, profile } = props
  const links = auth.uid ? <SignedInLinksComponent profile={profile} /> : <SignedOutLinksComponent />
  // console.warn(auth)
  
  return (
    <nav className="z-depth-0">
    <div className="nav-wrapper grey darken-4 z-depth-0">
        <div className="container">
            <Link to="/" href="#" className="brand-logo left">Title</Link>
            {/* <SignedInLinksComponent /> */}
            {/* <SignedOutLinksComponent /> */}
            { links }
        </div>
    </div>
  </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default  connect(mapStateToProps)(NavbarComponent)