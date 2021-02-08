import React from 'react';
import { View, Text, Image, StyleSheet, Button, Platform } from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors'


const TouchableOpacityButton = (props) => {
    let TouchableCmp
    if (Platform.OS === 'android') {
        TouchableCmp = TouchableNativeFeedback
    } else {
        TouchableCmp = TouchableOpacity
    }

    return (<TouchableCmp style={{ backgroundColor: props.color, height: 35, width: 130, alignItems: 'center', padding: 2, borderRadius: 10 }} onPress={props.button}>
        <Text style={{ fontSize: 20, fontFamily: 'open-sans-bold', color: 'white' }}>{props.buttonName}</Text>
    </TouchableCmp>)
}
export default TouchableOpacityButton