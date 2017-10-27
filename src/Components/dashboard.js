import React from 'react';
import { RaisedButton, MenuItem, Drawer, AppBar, IconButton, IconMenu, FlatButton, Toggle } from "material-ui";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Glyphicon, Row, Col } from "react-bootstrap";
import { Route, Link, Switch } from "react-router-dom";
import "../Styles/App.css";
import { ShowDonors } from "./index";
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
        return (
            <div>
                <Row style={{ marginTop: 20 }}>
                    <Col md={2}>
                        <Drawer containerStyle={styles.drawerMain} open={this.state.open}>
                            <Link className={(_ => {
                                if (this.state.activeNotifier == 1) {
                                    return "active"
                                }
                                return "";
                            })()} to="/dashboard" style={{ color: "gray" }}><MenuItem onClick={_ => this.setState({ activeNotifier: 1 })} style={styles.sideMenuSpecial} className={(_ => {
                                if (this.state.activeNotifier == 1) {
                                    return "active"
                                }
                                return "";
                            })()}><Glyphicon glyph="home" /> Dash Board</MenuItem></Link>
                            <br />
                            <Link className={(_ => {
                                if (this.state.activeNotifier == 2) {
                                    return "active"
                                }
                                return "";
                            })()} to="/dashboard/bloodDonors" style={{ color: "gray" }}>   <MenuItem onClick={_ => this.setState({ activeNotifier: 2 })} style={styles.sideMenu} className={(_ => {
                                if (this.state.activeNotifier == 2) {
                                    return "active"
                                }
                                return "";
                            })()}><Glyphicon glyph="list-alt" /> Donors List</MenuItem></Link>
                            <br />
                            <Link className={(_ => {
                                if (this.state.activeNotifier == 3) {
                                    return "active"
                                }
                                return "";
                            })()} to="/dashboard/bloodSeekers" style={{ color: "gray" }}>   <MenuItem onClick={_ => this.setState({ activeNotifier: 3 })} style={styles.sideMenu} className={(_ => {
                                if (this.state.activeNotifier == 3) {
                                    return "active"
                                }
                                return "";
                            })()}><Glyphicon glyph="list-alt" /> Seekers List</MenuItem></Link>
                        </Drawer>
                    </Col>
                    <Col md={9}>
                        <div>
                            <Glyphicon style={{ fontSize: 30 }} glyph="th-list" />
                            <h1 style={{ display: "inline", marginLeft: 10 }}>Dash Board</h1>
                            <Switch>
                                <Route path="/dashboard/bloodDonors" render={_ => <ShowDonors fetchDonors={this.props.fetchDonors} data={this.props.data} />} />
                                <Route path="/dashboard/bloodSeekers" render={_ => <h1>Seekers</h1>} />
                                <Route exact path="/dashboard/:contentName" render={_ => {
                                    document.body.style.backgroundImage = "url('')";
                                    return <h1>404 Not Found</h1>
                                }} />
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