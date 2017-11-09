import { Router, Route } from "react-router-native";
import { View } from "react-native";
import { CustomHeader } from "../components/index";

export default _ => {
    <Router>
        <View>
            <Route path="/" render={(props) => (<CustomHeader {props} />)} />
        </View>
    </Router>
}   