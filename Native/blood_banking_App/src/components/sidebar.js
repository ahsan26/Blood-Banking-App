import React, { Component } from 'react';
import { Button, Text, Content, Container, Icon } from "native-base";
import { StyleSheet, View, AsyncStorage } from "react-native";
export default class Sidebar extends Component {
    componentWillUpdate() {
        return false;
    }
    render() {
        console.log("!!!!!!!!   ", (AsyncStorage.getItem("loggedUser")));
        return (
            <Container>
                <Container style={styles.attractor}>
                    <View style={styles.attractorBody}>
                        <Text style={styles.attractorBodyText}>Blood Bank</Text>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Donate Blood For Life</Text>
                    </View>
                </Container>
                <Content style={{ backgroundColor: '#FFFFFF' }}>
                    <Button onPress={_ => { this.props.control.history.push("/register") }} light><Icon name="person-add" style={styles.iconStyle} /><Text>Register</Text></Button>
                    <Button onPress={_ => { this.props.control.history.push("/login") }} light><Icon name="person" style={[styles.iconStyle]} /><Text>LogIn</Text></Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    attractor: {
        backgroundColor: "#E53333",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    attractorBody: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        marginTop: 40
    },
    attractorBodyText: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "500"
    },
    subtitleContainer: {
        marginTop: 100
    },
    subtitle: {
        color: "#fff",
        alignSelf: "center"
    },
    iconStyle: {
        color: "gray"
    }
});

module.exports = Sidebar;