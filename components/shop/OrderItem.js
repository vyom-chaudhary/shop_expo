import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors'
import { useEffect } from 'react';
// import { useState } from 'react';



const OrderItem = (props) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <View stule={{ flex: 1 }}>
            <View style={styles.screen}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View>
                        <Text style={{ fontSize: 20, fontFamily: 'open-sans-bold' }}>{props.lengthOrderList > 0 ? '$' + Math.round(props.orderItem.totalAmount * 100) / 100 : $0}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, fontFamily: 'open-sans' }}>{props.lengthOrderList > 0 ? props.orderItem.date.toDateString() : 0}</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Button title={showDetails ? 'HIDE DETAILS' : 'SHOW DETAILS'} onPress={() => { setShowDetails(!showDetails) }}></Button>
                </View>
                {showDetails && (
                    <View>
                        {
                            props.orderItem.items.map((data) => {
                                return (
                                    <View style={{ flexDirection: 'row', marginHorizontal: 25, marginVertical: 10 }}>
                                        <Text style={{ fontSize: 18, fontFamily: 'open-sans', marginRight: 5 }}>{data.quantity}</Text>
                                        <Text style={{ fontSize: 18, fontFamily: 'open-sans-bold' }}>{data.productTitle}</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <Text style={{ fontSize: 18, fontFamily: 'open-sans-bold' }}>${data.sum}</Text>
                                        </View>

                                    </View>
                                )
                            })
                        }
                    </View>
                )

                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 10,
        // flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        // marginHorizontal: 25,
        // alignItems: 'center',
        // justifyContent: 'space-between',
        shadowColor: 'black',
        shadowOpacity: 0.75,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        // height: 100,
        borderRadius: 10,
        backgroundColor: 'white'


    }
})

export default OrderItem