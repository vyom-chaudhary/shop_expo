import React from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from "../../store/actions/cart";
import { ADD_ORDER, addOrder } from "../../store/actions/orders";

import Colors from '../../constants/Colors'
import CartItem from "../../components/shop/Cart-Item";
const CartScreen = (props) => {

    const dispatch = useDispatch();

    const cartTotalAmt = useSelector((state) => state.cart.totalAmounts)
    const cartList = useSelector((state) => state.cart.items)
    const renderItemList = ({ item }) => {
        return (
            <CartItem cartItem={item} onDelete={() => dispatch(removeFromCart(item.product_id))}></CartItem>

        )
    }
    return (
        <View>
            <View style={styles.screen}>
                <Text style={{ fontFamily: 'open-sans-bold', fontSize: 20, }}>Total :  <Text style={{ fontFamily: 'open-sans-bold', fontSize: 20, color: Colors.primary }}>${Math.round(cartTotalAmt * 100) / 100}</Text></Text>
                <Button color={Colors.accent} onPress={() => dispatch(addOrder(cartList, cartTotalAmt))} disabled={cartList.length > 0 ? false : true} title='Order Now'></Button>
            </View>
            <View>
                <FlatList data={cartList} renderItem={renderItemList} keyExtractor={(item) => item.product_id}>
                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 15,
        shadowColor: 'black',
        shadowOpacity: 0.75,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center'

    }
})
export default CartScreen