import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { RaisedButton } from "material-ui";
import { capitialize } from "../services/helper";
import { Route, Link } from "react-router-dom";
import { ShowUserDetails } from "./index";
window.location.pathname == "/dashboard/bloodSeekers" ? document.body.style.backgroundImage = "url('')" : "";
export default class ShowSeekers extends React.Component {
    constructor() {
        super();
        this.state = {
            detailsShow: false,
            index: 0
        }
    }
    componentWillMount = () => {
        this.props.fetchSeekers();
    }
    redirector(i) {
        this.setState({ detailsShow: true });
        this.setState({ index: i });
    }
    uiStateChanger = () => {
        this.setState({ detailsShow: false });
    }
    render() {
      var seekers = this.props.data.seekers;
        if (this.state.detailsShow) {
            return <Route path="/dashboard/bloodSeekers/:contentName" render={_ => <ShowUserDetails type="Blood_Seeker" uiStateChanger={this.uiStateChanger} index={this.state.index} data={seekers} />} />
        } else {
            return <div>
                <Row>
                    <h1>Seekers</h1>
                    {
                        seekers.map((item, i) => {
                            let url = "" + window.location.pathname + "/" + item.key;
                            return <Col key={i} style={{ padding: 0, height: 400, marginLeft: 10 }} md={3}>
                                <Image responsive src={require("../Images/bloddonation.gif")} />
                                <div style={{ textAlign: "center" }}>
                                    <h1>{capitialize(item.userName)}</h1>
                                    <Link onClick={_ => { this.redirector(i); }} to={url}>
                                        <RaisedButton label="View Details" backgroundColor="#E6403F" labelColor="#fff" />
                                    </Link>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </div>
        }
    }
}
