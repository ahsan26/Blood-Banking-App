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
        }
    }
    signIN = () => {
        if (this.state.email != "" && this.state.pass != "") {
            this.props.manager({ email: this.state.email, password: this.state.pass });
        }
    }
    render() {
        return (
            <div>
                <AppBar style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className="signInAppbarStyles" title="Blood Banking" showMenuIconButton={false} />
                <div>
                    <Grid className="vertical-center">
                        <Row className="show-grid">
                            <Col mdOffset={6} md={6} style={{ backgroundColor: "rgba(0,0,0,0.3)" }} >
                                <form action="JavaScript:void(0)" style={{ height: 400 }} onSubmit={this.signIN}>
                                    <FormGroup controlId="formBasicText">
                                        <Row style={{ marginBottom: 15 }}>
                                            <Col md={10}>
                                                <ControlLabel style={{ color: "#fff", fontFamily: "Roboto", marginTop: 15, marginBottom: 15 }}><span style={{ fontSize: 22, fontWeight: 300 }}>Sign In</span><br /><br /><span style={{ fontSize: 18, fontWeight: 300 }}>Fill in the form to get Instant Access</span></ControlLabel>
                                            </Col>
                                            <Col md={2}>
                                                <Button style={{ backgroundColor: "transparent", border: 0 }} ><Glyphicon style={{ fontSize: 50, color: "rgba(211,211,211, 0.5)" }} glyph="user" /></Button>
                                            </Col>
                                        </Row>
                                        <FormControl type="email" value={this.state.val} placeholder="Enter Email" onChange={e => { this.setState({ email: e.target.value }) }} />
                                        <FormControl.Feedback />
                                        <br />
                                        <FormControl type="password" value={this.state.pass} placeholder="Enter Password" onChange={e => { this.setState({ pass: e.target.value }) }} />
                                        <FormControl.Feedback />
                                        <br /><br />
                                        <Button type="submit" bsSize="lg" bsStyle="info">Sign In</Button>
                                        <br /><br /><br /><br />
                                        <HelpBlock style={{ color: "#fff", fontSize: 16 }}>Not Have Account, <Link to="/signUp" style={{ color: "#2980b9" }}><strong>SIGNUP</strong></Link></HelpBlock>
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