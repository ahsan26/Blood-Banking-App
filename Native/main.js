import React from 'react'
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Routes from "./routes/index";
import { getDonors } from "./actions/fetcher_Actions";
class Main extends React.Component {
    render() {
        return (
            <Routes donors_Data={this.props.donors_Data} getDonors={this.props.getDonors} />
        );
    }
}
export default connect(state => {
    donors_Data: state.Data_Fetcher
}, { getDonors })(Main);