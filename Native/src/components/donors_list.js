import React from 'react';
import { View, Text, ScrollView } from "react-native";
import { Icon, Content, Button } from "native-base";
import FontAwesome, { Icons } from "react-native-fontawesome";
import call from "react-native-phone-call";
class DonorsList extends React.Component {
    makeACall = () => {
        console.log(1)
        call({
            number: '9093900003', // String value with the number to call
            prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
        }).catch(console.error)
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.each_user}>
                    <View style={styles.identifier}>
                        <Text style={styles.identifierText}>AB+</Text>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Donor Name</Text>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>03000000000</Text>
                    </View>
                    <View>
                        <Button onPress={this.makeACall} light>
                            <Icon style={[styles.textStyle, styles.iconStyle]} name='call' />
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    main: {
        marginTop: 60
    },
    each_user: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    each_user_thumbnail: {
        width: 80,
        height: 80
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