import React from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

import { StyleSheet } from "react-native";
export default class CustomHeader extends React.Component {
    render() {
        return (
            <Header style={styles.headerStyle}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Blood Banking</Title>
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