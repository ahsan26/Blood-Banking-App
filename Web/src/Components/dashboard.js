import React from 'react';
import { RaisedButton, MenuItem, Drawer, AppBar, IconButton, IconMenu, FlatButton, Toggle } from "material-ui";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Glyphicon, Row, Col } from "react-bootstrap";
import { Route, Link, Switch } from "react-router-dom";
import "../Styles/App.css";
import { ShowDonors, ShowSeekers } from "./index";
window.location.pathname == "/dashboard" ? document.body.style.backgroundImage = "url('')" : false;
export default class DashBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            open: true,
            activeNotifier: 1
        }
    }
    handleToggle() {
        this.setState({ open: !this.state.open })
    }
    render() {
        console.log("dashboard "  , this.props.history);
        return (
            <div>
                <Row style={{ marginTop: 20 }}>
                    <Col md={2}>
                        <Drawer containerStyle={styles.drawerMain} open={this.state.open}>
                            <Link className={(_ => {
                                if (window.location.pathname == "/dashboard") {
                                    return "active"
                                }
                                return "";
                            })()} to="/dashboard" style={{ color: "gray" }}><MenuItem style={styles.sideMenuSpecial} className={(_ => {
                                if (window.location.pathname == "/dashboard") {
                                    return "active"
                                }
                                return "";
                            })()}><Glyphicon glyph="home" /> Dash Board</MenuItem></Link>
                            <br />
                            <Link className={(_ => {
                                if (window.location.pathname == "/dashboard/bloodDonors") {
                                    return "active"
                                }
                                return "";
                            })()} to="/dashboard/bloodDonors" style={{ color: "gray" }}>   <MenuItem style={styles.sideMenu} className={(_ => {
                                if (window.location.pathname == "/dashboard/bloodDonors") {
                                    return "active"
                                }
                                return "";
                            })()}><Glyphicon glyph="list-alt" /> Donors List</MenuItem></Link>
                            <br />
                            <Link className={(_ => {
                                if (window.location.pathname == "/dashboard/bloodSeekers") {
                                    return "active"
                                }
                                return "";
                            })()} to="/dashboard/bloodSeekers" style={{ color: "gray" }}>   <MenuItem style={styles.sideMenu} className={(_ => {
                                if (window.location.pathname == "/dashboard/bloodSeekers") {
                                    return "active"
                                }
                                return "";
                            })()}><Glyphicon glyph="list-alt" /> Seekers List</MenuItem></Link>
                        </Drawer>
                    </Col>
                    <Col md={9}>
                        <div style={{ marginLeft: "3%" }}>
                            <Glyphicon style={{ fontSize: 30 }} glyph="th-list" />
                            <h1 style={{ display: "inline", marginLeft: 5 }}>Dash Board</h1>
                            <Switch>
                                <Route path="/dashboard/bloodDonors" render={_ => <ShowDonors fetchDonors={this.props.fetchDonors} data={this.props.data} />} />
                                <Route path="/dashboard/bloodSeekers" render={_ => <ShowSeekers fetchSeekers={this.props.fetchSeekers} data={this.props.data} />} />
                                {/* <Route path="/dashboard/:contentName" render={_ => {
                                    document.body.style.backgroundImage = "url('')";
                                    return <h1>404 Not Found</h1>
                                }} /> */}
                            </Switch>
                        </div>
                    </Col>
                    <Col md={1}>
                        <IconMenu iconButtonElement={
                            <IconButton><MoreVertIcon /></IconButton>
                        }
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                            <MenuItem onClick={this.props.signOut} primaryText="Sign out" />
                        </IconMenu>
                    </Col>
                </Row>
            </div>
        );
    }
}
const styles = {
    drawerMain: {
        backgroundColor: "#1D2A39",
    },
    sideMenu: {
        color: "gray",
    },
    sideMenuSpecial: {
        marginTop: 30,
        color: "gray"
    }
}