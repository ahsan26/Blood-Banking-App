import React from 'react';
import { Col, Row, Media, Table, Glyphicon } from "react-bootstrap";
import { capitialize } from "../services/helper";
import { RaisedButton } from "material-ui";
import { Route } from "react-router-dom";
window.location.pathname != "/" && window.location.pathname != "/signUp" ? document.body.style.backgroundImage = "url('')" : "";
class Actions extends React.Component {
    render() {
        if (localStorage.getItem("user_type") == "Donor" && this.props.type == "Blood_Seeker") {
            return <RaisedButton labelColor="#fff" backgroundColor="#3498db" label="Donate" />
        }
        else if (localStorage.getItem("user_type") == "Blood_Seeker" && this.props.type == "Donor") {
            return <RaisedButton backgroundColor="#3498db" labelColor="#fff" label="Get Appoitment" />
        }
        return "";
    }
}
export default class ShowUserDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ""
        }
    }
    componentWillMount = () => {
        this.setState({ data: this.props.data[this.props.index] });
    }
    render() {
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <Media>
                            <Media.Left>
                                <img width={120} height={100} src={require("../Images/bloddonation.gif")} alt="Image" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>{capitialize(this.state.data.userName)}</Media.Heading>
                            </Media.Body>
                        </Media>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <td>{capitialize(this.state.data.userName)}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>{this.state.data.age}</td>
                                </tr>
                                <tr>
                                    <th>Blood Group</th>
                                    <td>{this.state.data.blood_group}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{this.state.data.gender}</td>
                                </tr>
                                <tr>
                                    <th>Cell Number</th>
                                    <td>{this.state.data.cellNumber}</td>
                                </tr>
                            </thead>
                        </Table>
                        <Row>
                            <Col md={6}>
                                <RaisedButton label="Reserve Blood" labelColor="#fff" backgroundColor="#e74c3c" />
                            </Col>
                            <Col md={6} style={{ textAlign: "right" }}>
                                <RaisedButton onClick={this.props.uiStateChanger}><Glyphicon glyph="arrow-left" /> Go Back</RaisedButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Actions type={this.props.type} />
            </div>
        );
    }
}
