import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';
import './App.css';

// import risingsun  from './asets/img/risingsun.jpg';

import NavbarComponent from './components/layout//Navbar'; 
import DashboardComponent from './components/dashboard/Dashboard';
import ProjectSummaryComponent from './components/projects/ProjectSummary';
import ProjectDetailsComponent from './components/projects/ProjectDetails';
import SignInComponent from'./components/auth/SignIn';
import SignUpComponent from './components/auth/SignUp';
import CreateProjectComponent from './components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <Switch>
            <Route exact path="/" component={ DashboardComponent } />
            <Route path="/project/:id" component={ ProjectDetailsComponent } />
            <Route path="/signin" component={ SignInComponent } />
            <Route path="/signup" component={ SignUpComponent } />
            <Route path="/create" component={ CreateProjectComponent } />
        </Switch>
      </Router>
    );
  }
}

export default App;
