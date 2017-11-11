import React from 'react'
import { Container, Content, Button, Text, Form, Item, Label, Input, Picker } from "native-base";
import { CustomDrawer } from "./index";
import { AsyncStorage } from "react-native";

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }
    submit = () => {
        const { email, password } = this.state;
        if (this.state.email && this.state.password) {
            this.props.signIn({ "email": email, "password": password });
            console.log(this.props.status);
            // if (status) {
            //     this.props.history.push("/donor_dashboard");
            // }
        }
    }
    render() {
        return (
            <CustomDrawer {...this.props} title="Login">
                <Container>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input onChangeText={(e) => { this.setState({ email: e }) }} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input onChangeText={(e) => { this.setState({ password: e }) }} />
                            </Item>
                            <Button onPress={this.submit} style={{ backgroundColor: "#AB0000", marginLeft: 10, marginRight: 10 }} block><Text>LogIn</Text></Button>
                        </Form>
                    </Content>
                </Container>
            </CustomDrawer>
        )
    }
}