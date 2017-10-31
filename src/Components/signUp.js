import React from 'react';
import { AppBar } from "material-ui";
import { Link } from "react-router-dom";
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Glyphicon } from "react-bootstrap";
export default class SignInComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: "",
            username: "",
            age: "",
            bloodGroup: "",
            type: "",
            cellNumber: "",
            location: "",
            gender: ""
        }
    }
    signUp = () => {
        if (this.state.email != "" && this.state.pass != "" && this.state.username != "" && this.state.age != "" && this.state.bloodGroup != "" && this.state.cellNumber != "" && this.state.location != "" && this.state.gender != "" && this.state.type != "") {
            this.props.manager({ email: this.state.email, password: this.state.pass, username: this.state.username, age: this.state.age, bloodGroup: this.state.bloodGroup, cellNumber: this.state.cellNumber, gender: this.state.gender, location: this.state.location, type: this.state.type });
        }
    }
    render() {
        return (
            <div>
                <AppBar style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className="signInAppbarStyles" title="Blood Banking" showMenuIconButton={false} />
                <div>
                    <Grid className="vertical-center">
                        <Row className="show-grid">
                            <Col lgOffset={5} lg={6} style={{ backgroundColor: "rgba(0,0,0,0.3)" }} >
                                <form action="JavaScript:void(0)" style={{ height: 600 }} onSubmit={this.signUp}>
                                    <FormGroup controlId="formBasicText">
                                        <Row style={{ marginBottom: 15 }}>
                                            <Col md={10}>
                                                <ControlLabel style={{ color: "#fff", fontFamily: "Roboto", marginTop: 15, marginBottom: 15 }}><span style={{ fontSize: 22, fontWeight: 300 }}>Sign Up</span><br /><br /><span style={{ fontSize: 18, fontWeight: 300 }}>Fill in the form to get Instant Access</span></ControlLabel>
                                            </Col>
                                            <Col md={2}>
                                                <Button style={{ backgroundColor: "transparent", border: 0 }} ><Glyphicon style={{ fontSize: 50, color: "rgba(211,211,211, 0.5)" }} glyph="user" /></Button>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginBottom: 15 }}>
                                            <Col md={6}>
                                                <FormControl type="text" style={{ color: "gray" }} value={this.state.username} placeholder="UserName" onChange={e => this.setState({ username: e.target.value })} /><FormControl.Feedback />
                                            </Col>
                                            <Col md={6}>
                                                <FormControl type="number" style={{ color: "gray" }} value={this.state.age} placeholder="Age" onChange={e => this.setState({ age: e.target.value })} /><FormControl.Feedback />
                                            </Col>
                                        </Row>
                                        <Row style={{ marginBottom: 15 }}>
                                            <Col md={6}>
                                                <FormControl type="number" style={{ color: "gray" }} value={this.state.cellNumber} placeholder="Cell Number" onChange={e => this.setState({ cellNumber: e.target.value })} /><FormControl.Feedback />
                                            </Col>
                                            <Col md={6}>
                                                <FormControl type="text" style={{ color: "gray" }} value={this.state.location} placeholder="Location" onChange={e => this.setState({ location: e.target.value })} /><FormControl.Feedback />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <FormControl onChange={e => { this.setState({ gender: e.target.value }) }} componentClass="select" style={{ color: "gray" }}>
                                                        <option value="select">Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </FormControl>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <FormControl onChange={e => { this.setState({ bloodGroup: e.target.value }) }} componentClass="select" style={{ color: "gray" }}>
                                                        <option value="select">Blood Group</option>
                                                        <option value="A+">A+</option>
                                                        <option value="B+">B+</option>
                                                        <option value="AB+">AB+</option>
                                                        <option value="O+">O+</option>
                                                    </FormControl>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <FormControl onChange={e => { this.setState({ type: e.target.value }) }} componentClass="select" style={{ color: "gray" }}>
                                                <option value="TYPE">Type</option>
                                                <option value="Donor">Donor</option>
                                                <option value="Blood_Seeker">Bloodseeker</option>
                                            </FormControl>
                                        </FormGroup>
                                        <FormControl type="email" style={{ color: "gray" }} value={this.state.email} placeholder="Enter Email" onChange={e => { this.setState({ email: e.target.value }) }} />
                                        <FormControl.Feedback />
                                        <br />
                                        <FormControl type="password" style={{ color: "gray" }} value={this.state.pass} placeholder="Enter Password" onChange={e => { this.setState({ pass: e.target.value }) }} />
                                        <FormControl.Feedback />
                                        <br /><br />
                                        <Button type="submit" bsSize="lg" bsStyle="info" >Sign Up</Button>
                                        <br /><br /><br /><br />
                                        <HelpBlock style={{ color: "#fff", fontSize: 16 }}>Not Have Account, <Link to="/" style={{ color: "#2980b9" }}><strong>SIGNIN</strong></Link></HelpBlock>
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}