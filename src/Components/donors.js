import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { capitialize } from "../services/helper";
window.location.pathname == "/dashboard/bloodDonors" ? document.body.style.backgroundImage = "url('')" : "";
export default class ShowDonors extends React.Component {
    componentWillMount = () => {
        this.props.fetchDonors();
    }
    render() {
        let donors = [];
        for (let prop in this.props.data.donors[0]) {
            let a = this.props.data.donors[0][prop];
            a.uid = prop;
            donors.push(a);
        }
        return (
            <div>
                <h1>Donors</h1>
                <Row>
                    {
                        donors.map((item, i) => {
                            return <Col key={i} style={{ padding: 0, height: 400, marginLeft: 10 }} md={3}>
                                <Image responsive src={require("../Images/bloddonation.gif")} />
                                <h1>{capitialize(item.userName)}</h1>
                                <h3>Blood Group: {item.blood_group}</h3>
                            </Col>
                        })
                    }
                </Row>
            </div>
        );
    }
}