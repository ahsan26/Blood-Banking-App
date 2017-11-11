import React from 'react';
import { View, Text, ScrollView } from "react-native";
import { Icon, Content, Button, Spinner, Container } from "native-base";
import call from "react-native-phone-call";
import { EachDonor } from "./index";
class DonorsList extends React.Component {
    makeACall = (cn) => {
        console.log(cn);
        call({
            number: cn,
            prompt: false
        }).catch(console.error)
    }
    render() {
        return (
            <View style={styles.main}>
                {
                    this.props.donors.map((item, i) => (
                        <EachDonor key={i} styles={styles} makeACall={this.makeACall} donor={item} />
                    ))
                }
            </View>
        );
    }
}

const styles = {
    main: {
        marginTop: 10
    },
    each_user: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        marginTop: 10,
    },
    each_user_thumbnail: {
        width: 100,
        height: 100
    },
    textStyle: {
        marginTop: 20,
    },
    iconStyle: {
        color: "gray",
    },
    identifier: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        backgroundColor: "#c0392b"
    },
    identifierText: {
        color: "#fff",
        fontSize: 18,
        alignSelf: "center"
    }
};
export default DonorsList;