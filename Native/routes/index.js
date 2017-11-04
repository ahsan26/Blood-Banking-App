import { NativeRouter, Route } from "react-router-native";
import React from "react";
import { View, Text } from "react-native";
import DonorsList from "../components/donors_list";
import Store from "../store";
import { Provider } from "react-redux";
export default (props) => {
    let getDonors = props.getDonors;
    return (
        <Provider store={Store}>
            <NativeRouter>
                <View style={props.style}>
                    <Route path="/" render={(props) => {
                        return (<DonorsList getDonors={getDonors} {...props} />)
                    }} />
                </View>
            </NativeRouter>
        </Provider>
    );
}