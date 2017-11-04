import React from 'react'
import { View, StyleSheet, ScrollView } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Donors_List extends React.Component {
    state = {
        loaded: false
    }
    async componentDidMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ loaded: true })
    }
    render() {
        if (this.state.loaded) {
            return (
                <Container>
                    <Header searchBar={true} style={styles.header}>
                        <Left>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Blood Bank</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <ScrollView>

                        </ScrollView>
                    </Content>
                </Container>
            );
        } else {
            return <Text>Nothing</Text>
        }
    }
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 45,
        backgroundColor: "#C80020",
        paddingBottom: 30,
        justifyContent: "center"
    }
});