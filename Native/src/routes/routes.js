import React from "react";
import { NativeRouter, Route } from "react-router-native";
import { View } from "react-native";
import { connect } from "react-redux";
import { Dashboard } from "../components/index";
import { getDonors } from "../Actions/donors_get_Actions";
class Routes extends React.Component {
    componentDidMount() {
        this.props.getDonors();
    }
    render() {
        return (
            <NativeRouter>
                <View>
                    <Route path="/" render={(props) => (<Dashboard {...props} />)} />
                </View>
            </NativeRouter>
        );
    }
}
export default connect(state => ({
    donors: state.donors
}), { getDonors })(Routes);