import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Prompt, Switch } from "react-router-dom";
import Modal from "react-modal";
class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}
class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
}
class Content extends Component {
    render() {
        return (
            <div>
                <h1>Content</h1>
                <div className="row">
                    <div className="col-md-6">
                        <NavLink to="/content/city">City</NavLink>
                    </div>
                    <div className="col-md-6">
                        <NavLink to="/content/sports">Sports</NavLink>
                    </div>
                </div>
                <Switch>
                    <Route path="/content/city" render={_ => <h1>City</h1>} />
                    <Route path="/content/sports" render={_ => <h1>Sports</h1>} />
                    <Route path="/content/:contentName" render={_ => <h1>404 Not Found</h1>} />
                </Switch>
            </div>
        );
    }
}
class ContentDetails extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.contentName}</h1>
                <img src={`http://lorempixel.com/400/200/${this.props.match.params.contentName}/1/`} />
            </div>
        );
    }
}
class Links extends Component {
    render() {
        return (
            <div className="list-group">
                <NavLink exact className="list-group-item" activeClassName="active" to="/">Home</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/about">About</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/content">Content</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/form">Form</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/modal">Modal</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/practice">Practice</NavLink>
            </div>
        );
    }
}
class Form extends Component {
    constructor() {
        super();
        this.state = {
            leave: false
        }
    }
    render() {
        return (
            <div>
                <Prompt when={this.state.leave} message="Are you sure to Leave?" />
                <h1>Form</h1>
                <input type="text" onChange={_ => this.setState({ leave: true })} className="form-control" autoFocus />
            </div>
        );
    }
}
class ModalData extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        }
    }
    changer = () => {
        this.setState({ isActive: !this.state.isActive });
    }
    render() {
        return (
            <div>
                <h1>Modal</h1>
                <button onClick={this.changer}>Show Modal</button>
                <Modal isOpen={this.state.isActive} onRequestClose={this.changer}>
                    <p>My First Modal</p>
                    <button onClick={this.changer}>Hide Modal</button>
                </Modal>
            </div>
        );
    }
}
class Practice extends Component {
    onNavigation=()=>{
       this.props.history.push("/content");
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.onNavigation}>Go to Content</button>
            </div>
        );
    }
}
export default class App extends Component {
    componentWillMount() {
        Modal.setAppElement("body");
    }
    render() {
        return (
            <BrowserRouter>
                <div className="row">
                    <div className="col-md-3">
                        <Links />
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/content" component={Content} />
                            <Route path="/form" component={Form} />
                            <Route path="/modal" component={ModalData} />
                            <Route path="/practice" component={Practice} />
                            <Route render={() => <h1>Not Found</h1>} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}