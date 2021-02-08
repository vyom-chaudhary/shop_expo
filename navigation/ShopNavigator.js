import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductsDetailsScreen from "../screens/shop/ProductsDetailsScreen";
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";

const Stack = createStackNavigator();


const ShopNavigator = () => {
    return (

        <Stack.Navigator screenOptions={{
            headerTintColor: Platform.OS === 'android' ? Colors.primary : 'white',
            headerStyle: { backgroundColor: Platform.OS === 'android' ? 'white' : Colors.primary }
        }}>
            <Stack.Screen name="All Products" component={ProductsOverviewScreen} />
            <Stack.Screen name="Details page" component={ProductsDetailsScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />


        </Stack.Navigator>
    )

}
const OrdersNavigator = () => {
    return (

        <Stack.Navigator screenOptions={{
            headerTintColor: Platform.OS === 'android' ? Colors.primary : 'white',
            headerStyle: { backgroundColor: Platform.OS === 'android' ? 'white' : Colors.primary }
        }}>

            <Stack.Screen name="orders" component={OrdersScreen} />


        </Stack.Navigator>
    )

}
const UserProductsNavigator = () => {
    return (

        <Stack.Navigator screenOptions={{
            headerTintColor: Platform.OS === 'android' ? Colors.primary : 'white',
            headerStyle: { backgroundColor: Platform.OS === 'android' ? 'white' : Colors.primary }
        }}>

            <Stack.Screen name="Your products" component={UserProductsScreen} />


        </Stack.Navigator>
    )

}
export { OrdersNavigator, ShopNavigator, UserProductsNavigator }