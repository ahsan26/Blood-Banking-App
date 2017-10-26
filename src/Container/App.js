import React, { Component } from 'react';
import '../Styles/App.css';
import { signUp, signIn } from "../Actions/Auth_Actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignInComponent, SignUpComponent, DashBoard } from "../Components/index";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={_ => {
              if (localStorage.getItem("signIN") == "true") {
                window.location.assign("/dashboard");
              }
              return <SignInComponent errorReporter={this.props.auth.error} manager={this.props.signIn} />
            }} />
            <Route path="/signUp" render={_ => {
              if (localStorage.getItem("signIN") == "true") {
                window.location.href = "/dashboard";
                return;
              }
              return <SignUpComponent errorReporter={this.props.auth.error} manager={this.props.signUp} />
            }} />
            <Route path="/dashboard" render={_ => {
              if (localStorage.getItem("signIN") != "true") {
                window.location.assign("/");
                return;
              }
              return <DashBoard />
            }} />
            <Route render={_ => <h1 style={{ color: "#fff" }}>404 Not Found</h1>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(state => ({
  auth: state.auth
}), { signUp, signIn })(App);