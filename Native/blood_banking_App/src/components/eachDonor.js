import React from 'react';
import { View, Text } from "react-native";
import { Icon, Button } from "native-base";

export default (props) => (
    <View style={props.styles.each_user}>
        <View style={props.styles.identifier}>
            <Text style={props.styles.identifierText}>{props.donor.blood_group}</Text>
        </View>
        <View style={{ justifyContent: "flex-start", marginTop: -10 , alignItems: "flex-start"}}>
            <Text style={props.styles.textStyle}>{props.donor.userName}</Text>
            <Text style={props.styles.textStyle}>{props.donor.location}</Text>
        </View>
        <View>
            <Text style={props.styles.textStyle}>{props.donor.cellNumber}</Text>
        </View>
        <View>
            <Button onPress={_ => { props.makeACall(props.donor.cellNumber) }} light>
                <Icon style={[props.styles.textStyle, props.styles.iconStyle]} name='call' />
            </Button>
        </View>
    </View>
);