import React from 'react'
import { FlatList, View, Text, StyleSheet, ViewPropTypes } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import { addToCart } from "../../store/actions/cart";
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import HeaderButton from "../../components/UI/HeaderButton";
import { DELETE_PRODUCT, deleteOrder } from "../../store/actions/products";

const userProductsScreen = (props) => {
    const Products = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch()

    props.navigation.setOptions({
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Cart" iconName="ios-cart" iconSize={30} onPress={() => props.navigation.navigate('Cart')}></Item>
                </HeaderButtons>
            )
        },
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Cart" iconName="ios-menu" iconSize={35} onPress={() => props.navigation.toggleDrawer()}></Item>
                </HeaderButtons>
            )
        }
    })

    const renderProductItem = (itemData) => {
        const data = itemData.item

        return (
            // <View>
            //     <Text>{itemData.item.title}</Text>
            // </View>dispatch(addToCart(data))
            <ProductItem product={data} firstButtonName='Edit' secondButtonName='Delete' secondButtonEvent={() => dispatch(deleteOrder(data.id))} firstButtonEvent={() => console.log('edit')}
                viewDetails={() => props.navigation.navigate('Details page', { productId: itemData.item.id })}>
            </ProductItem>
        )
    }
    //            

    return (
        <FlatList data={Products} keyExtractor={(item) => item.id} renderItem={renderProductItem} numColumns={1}></FlatList>
    )
}

const style = StyleSheet.create({

})
export default userProductsScreen