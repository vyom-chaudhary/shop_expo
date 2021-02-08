import React from 'react';
import { View, Text, Image, StyleSheet, Button, Platform } from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors'
import TouchableOpacityButton from "../UI/TouchableOpacityButton";

const ProductItem = (props) => {
    let TouchableCmp
    if (Platform.OS === 'android') {
        TouchableCmp = TouchableNativeFeedback
    } else {
        TouchableCmp = TouchableOpacity
    }
    return (
        <View style={styles.screen}>
            <View style={{ overflow: 'hidden', borderRadius: 10 }}>
                <TouchableCmp onPress={props.viewDetails} useForeground>
                    <View>
                        <Image style={styles.image} source={{ uri: props.product.imageUrl }}></Image>
                    </View>
                    <View style={{ backgroundColor: 'white', height: 100 }}>
                        <View style={{ alignSelf: 'center', marginTop: 5 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'open-sans-bold' }}>{props.product.title}</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ fontFamily: 'open-sans' }}>{props.product.price}$</Text>
                        </View>
                        <View style={{
                            justifyContent: 'space-between', flex: 1, flexDirection: 'row', paddingHorizontal: 20, height: '25%'
                        }}>
                            <TouchableOpacityButton buttonName={props.firstButtonName} button={props.firstButtonEvent} color={Colors.accent}></TouchableOpacityButton>
                            <TouchableOpacityButton buttonName={props.secondButtonName} button={props.secondButtonEvent} color={Colors.primary}></TouchableOpacityButton>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    );
};
// props.onSelectCart
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginBottom: 20,
        marginHorizontal: 25,
        // alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.75,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    image: {
        height: 200,
        width: "100%"
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
})

export default ProductItem;