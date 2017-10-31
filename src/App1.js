import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Prompt } from "react-router-dom";
const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);
const About = () => (
    <div>
        <h1>About</h1>
    </div>
);
const Links = () => (
    <div className="list-group">
        <NavLink className="list-group-item" activeClassName="active" exact to="/">Home</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/about">About</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/content">Content</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/form">Form</NavLink>
    </div>
);
const Content = () => (
    <div>
        <h1>Contents</h1>
        <div className="row">
            <div className="col-md-6">
                <NavLink className="btn btn-info" to="/content/city">City</NavLink>
            </div>
            <div className="col-md-6">
                <NavLink className="btn btn-success" to="/content/sports">Sports</NavLink>
            </div>
        </div>
        <Route path="/content/:contentName" component={ContentDetails} />
    </div>
);
const ContentDetails = (props) => (
    <div>
        {props.match.params.contentName ?
            <div>
                <h1>{props.match.params.contentName}</h1>
                <img src={"http://lorempixel.com/400/200/" + props.match.params.contentName + "/1/"} />
            </div>
            : null}
    </div>
);
class Form extends Component {
    constructor() {
        super();
        this.state = {
            isChanged: false
        }
    }
    render() {
        return (
            <div>
                <Prompt when={this.state.isChanged} message="Are you sure to leave?" />
                <h1>Form</h1>
                <input type="text" onChange={_ => this.setState({ isChanged: true })} />
            </div>
        );
    }
}
const App = () => (
    <Router>
        <div className="row">
            <div className="col-md-3">
                <Links />
            </div>
            <div className="col-md-9">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/content" component={Content} />
                <Route path="/form" component={Form} />
            </div>
        </div>
    </Router>
);
export default App;