import React from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

import { StyleSheet } from "react-native";
export default class CustomHeader extends React.Component {
    render() {
        return (
            <Header style={styles.headerStyle}>
                <Left>
                    <Button transparent onPress={() => this.props.openDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#AB0000"
    }
});