import React from 'react';
import { View, Text, Image, StyleSheet, Button, Platform } from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import { HeaderButton } from "react-navigation-header-buttons";
import Colors from '../../constants/Colors'


const CustomHeaderButton = (props) => {
    return (<HeaderButton
        {...props}
        IconComponent={Ionicons}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}>
    </HeaderButton>)
}

export default CustomHeaderButton