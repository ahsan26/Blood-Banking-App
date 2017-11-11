import React, { Component } from 'react';
import { Button, Text } from "native-base";
import { Content } from 'native-base';

export default class Sidebar extends Component {
    render() {
        return (
            <Content style={{ backgroundColor: '#FFFFFF' }}>
                <Button onPress={_ => { console.log("slidebar !!! ", this.props.control.history); this.props.control.history.push("/register") }} light><Text>Register</Text></Button>
                <Button onPress={_ => { console.log("slidebar !!! ", this.props.control.history); this.props.control.history.push("/login") }} light><Text>LogIn</Text></Button>
            </Content>
        );
    }
}

module.exports = Sidebar;