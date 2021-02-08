import React from 'react';
import { View, Text, Image, StyleSheet, Button, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors'

const CartItem = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, alignItems: 'center', marginTop: 10 }}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ marginRight: 5, fontSize: 18, fontFamily: 'open-sans' }}>{props.cartItem.quantity}</Text>
                <Text style={{ marginRight: 5, fontSize: 18, fontFamily: 'open-sans-bold' }}>{props.cartItem.productTitle}</Text>
            </View>
            <View>
                <Text style={{ marginRight: 5, fontSize: 15, fontFamily: 'open-sans' }}>${Math.round(props.cartItem.sum * 100) / 100}</Text>
            </View>
            <View>
                <Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} onPress={props.onDelete}
                    size={23}
                    color="red"></Ionicons>
            </View>
        </View>
    )
}


export default CartItem;