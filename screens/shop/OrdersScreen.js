import React, { useEffect } from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import HeaderButton from "../../components/UI/HeaderButton";

import { addToCart, removeFromCart } from "../../store/actions/cart";
import { ADD_ORDER, addOrder } from "../../store/actions/orders";

import Colors from '../../constants/Colors'
import OrderItem from "../../components/shop/OrderItem";
const OrdersScreen = (props) => {
    const orderList = useSelector(state => state.orders.orders)
    console.log(orderList)
    props.navigation.setOptions({
        headerTitle: 'Your Orders',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Cart" iconName="ios-menu" iconSize={35} onPress={() => props.navigation.toggleDrawer()}></Item>
                </HeaderButtons>
            )
        }
    })

    console.log("orderList", orderList)
    useEffect(() => {
        renderOrderItems
    }, [orderList])
    const renderOrderItems = (itemData) => {
        const data = itemData.item
        return (
            <OrderItem orderItem={data} lengthOrderList={orderList.length}></OrderItem>
        )
    }
    return (
        <FlatList renderItem={renderOrderItems} data={orderList} keyExtractor={(item) => item.id}></FlatList>
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
        height: 100,
        borderRadius: 10,
        backgroundColor: 'white'


    }
})
export default OrdersScreen 