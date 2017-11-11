import React from 'react'
import { Container, Content, Button, Text, Form, Item, Label, Input, Picker } from "native-base";
import { CustomDrawer } from "./index";

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            gender: "male",
            blood_group: "A+",
            username: "",
            age: "",
            cellNumber: "",
            email: "",
            password: "",
            location: ""
        }
    }
    onValueChangeForGender = (value) => {
        this.setState({ gender: value });
    }
    onValueChangeForBloodGroup = (value) => {
        this.setState({ blood_group: value })
    }
    componetWillUpdate() {
        return false;
    }
    submit = () => {
        const { username, age, cellNumber, location, email, gender, blood_group, password } = this.state;
        if (this.state.username && this.state.age && this.state.cellNumber && this.state.email && this.state.location && this.state.password) {
            this.props.signUp({ "userName": username, "age": age, "cellNumber": cellNumber, "email": email, "blood_group": blood_group, "gender": gender, "location": location, "password": password, type: "Donor" });
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("register next props !!!!!!!   ", nextProps);
        if (nextProps.status) {
            this.props.history.push("/");
        }
    }
    render() {
        console.log(this.props);
        return (
            <CustomDrawer {...this.props} title="Register">
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(e) => { this.setState({ username: e }) }} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Age</Label>
                            <Input onChangeText={(e) => { this.setState({ age: e }) }} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Cell Number</Label>
                            <Input onChangeText={(e) => { this.setState({ cellNumber: e }) }} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Location</Label>
                            <Input onChangeText={(e) => { this.setState({ location: e }) }} />
                        </Item>
                        <Picker style={{ marginLeft: 10 }}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.gender}
                            onValueChange={this.onValueChangeForGender.bind(this)}>
                            <Item label="Male" value="male" />
                            <Item label="Female" value="female" />
                        </Picker>
                        <Picker style={{ marginLeft: 10 }}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.blood_group}
                            onValueChange={this.onValueChangeForBloodGroup.bind(this)}>
                            <Item label="A+" value="A+" />
                            <Item label="B+" value="B+" />
                            <Item label="O+" value="O+" />
                            <Item label="AB+" value="AB+" />
                            <Item label="A-" value="A-" />
                            <Item label="B-" value="B-" />
                            <Item label="O-" value="O-" />
                            <Item label="AB-" value="AB-" />
                        </Picker>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(e) => { this.setState({ email: e }) }} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input onChangeText={(e) => { this.setState({ password: e }) }} />
                        </Item>
                        <Button onPress={this.submit} style={{ backgroundColor: "#AB0000", marginLeft: 10, marginRight: 10 }} block><Text>Register</Text></Button>
                    </Form>
                </Content>
            </CustomDrawer>
        )
    }
}