import React from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { StyleSheet } from "react-native";
export default class CustomHeader extends React.Component {
    render() {
        return (
            <Container>
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
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#e74c3c"
    }
});