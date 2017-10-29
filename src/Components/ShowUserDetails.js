import React from 'react';
import { Col, Row, Media, Table } from "react-bootstrap";
import { capitialize } from "../services/helper";
import { RaisedButton } from "material-ui";
window.location.pathname != "/" && window.location.pathname != "/signUp" ? document.body.style.backgroundImage = "url('')" : "";
export default class ShowUserDetails extends React.Component {
    render() {
        let data = this.props.data[this.props.index];
        console.log(data);
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <Media>
                            <Media.Left>
                                <img width={120} height={100} src={require("../Images/bloddonation.gif")} alt="Image" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>{capitialize(data.userName)}</Media.Heading>
                            </Media.Body>
                        </Media>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <td>{capitialize(data.userName)}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>{data.age}</td>
                                </tr>
                                <tr>
                                    <th>Blood Group</th>
                                    <td>{data.blood_group}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{data.gender}</td>
                                </tr>
                                <tr>
                                    <th>Cell Number</th>
                                    <td>{data.cellNumber}</td>
                                </tr>
                            </thead>
                        </Table>
                        <RaisedButton label="Reserve Blood" labelColor="#fff" backgroundColor="#e74c3c" />
                    </Col>
                </Row>
            </div>
        );
    }
}