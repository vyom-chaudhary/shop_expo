import React from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../../store/actions/cart";

const ProductsDetailsScreen = (props) => {
    // const Products = useSelector(state => state.products.availableProducts)

    const dispatch = useDispatch()
    const productId = props.route.params.productId
    const availableProducts = useSelector(state => state.products.availableProducts)

    const product = availableProducts.find(data => data.id === productId)

    props.navigation.setOptions({
        headerTitle: product.title
    })
    return (
        // <FlatList data={Products} keyExtractor={(item) => item.id} renderItem={(itemData) => <Text>data</Text>}></FlatList>
        <ScrollView style={{ flex: 1, }}>
            <View>
                <Image style={{ height: 300, width: '100%' }} source={{ uri: product.imageUrl }}></Image>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Button onPress={() => dispatch(addToCart(product))} title="ADD TO CART"></Button>
            </View>
            <View style={{ alignSelf: 'center', marginVertical: 10 }}>
                <Text style={{ fontSize: 20, fontFamily: 'open-sans-bold' }}>{product.price}$ </Text>
            </View>
            <View style={{ alignSelf: 'center', marginVertical: 10 }}>
                <Text style={{ fontSize: 15, fontFamily: 'open-sans' }}>{product.description} </Text>
            </View>
        </ScrollView>
    )
}


export default ProductsDetailsScreen