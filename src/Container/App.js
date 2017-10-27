import React, { Component } from 'react';
import '../Styles/App.css';
import { signUp, signIn, signOut } from "../Actions/Auth_Actions";
import { getDonors, getSeekers } from "../Actions/data_fetcher_Actions";
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
              return <DashBoard fetchDonors={this.props.getDonors} signOut={this.props.signOut} data={this.props.data_Fetcher} />
            }} />
            <Route render={_ => <h1 style={{ color: "#3498db", fontWeight: 600, textAlign: "center" }}>404 Not Found</h1>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(state => ({
  auth: state.auth,
  data_Fetcher: state.data_Fetcher
}), { signUp, signIn, signOut, getDonors, getSeekers })(App);