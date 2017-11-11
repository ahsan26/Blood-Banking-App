import React from "react";
import { NativeRouter, Route } from "react-router-native";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Dashboard, Register, Login } from "../components/index";
import { Container } from "native-base";
import { getDonors } from "../Actions/donors_get_Actions";
import { signUp, signIn, signOut } from "../Actions/Auth_Actions";
class Routes extends React.Component {
    componentDidMount() {
        this.props.getDonors();
    }
    render() {
        return (
            <NativeRouter>
                <Container>
                    <Route exact path="/" render={(props) => (<Dashboard {...props} donors={this.props.donors.donors} />)} />
                    <Route path="/register" render={(props) => (<Register status={this.props.auth.loggedIn} signUp={this.props.signUp} {...props} />)} />
                    <Route path="/login" render={(props) => (<Login status={this.props.auth.loggedIn} signIn={this.props.signIn} {...props} />)} />
                    <Route path="/donor_dashboard" render={_ = <Text>Dashboard</Text>} />
                </Container>
            </NativeRouter>
        );
    }
}
export default connect(state => ({
    donors: state.donors,
    auth: state.auth
}), { getDonors, signIn, signUp, signOut })(Routes);