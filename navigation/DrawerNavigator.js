import React from 'react'
import { Platform } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductsDetailsScreen from "../screens/shop/ProductsDetailsScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import { Ionicons } from '@expo/vector-icons'

import CartScreen from '../screens/shop/CartScreen'
import { OrdersNavigator, ShopNavigator, UserProductsNavigator } from './ShopNavigator'

// <Drawer.Screen name="orders" component={OrdersNavigator}></Drawer.Screen>

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContentOptions={{ activeTintColor: Colors.primary, }}>
            <Drawer.Screen name="products" options={{ drawerIcon: ({ size, color }) => <Ionicons color={color} size={size} name={Platform.OS === 'android' ? 'md-list' : 'ios-list'} /> }}
                component={ShopNavigator}></Drawer.Screen>
            <Drawer.Screen name="orders" options={{ drawerIcon: ({ size, color }) => <Ionicons color={color} size={size} name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} /> }}
                component={OrdersNavigator}></Drawer.Screen>
            <Drawer.Screen name="Admin" options={{ drawerIcon: ({ size, color }) => <Ionicons color={color} size={size} name={Platform.OS === 'android' ? 'md-create' : 'ios-create'} /> }}
                component={UserProductsNavigator}></Drawer.Screen>

        </Drawer.Navigator >
    )
}

export default DrawerNavigator 