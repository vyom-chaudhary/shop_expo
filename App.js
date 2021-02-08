import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens'

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/orders'

import ShopNavigator from './navigation/ShopNavigator';
import DrawerNavigator from './navigation/DrawerNavigator'
import { composeWithDevTools } from 'redux-devtools-extension'
enableScreens();



const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer
})

const store = createStore(rootReducer, composeWithDevTools())
const FetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoading, setFontLoading] = useState(false)

  if (!fontLoading) {
    return (<AppLoading startAsync={FetchFonts} onFinish={() => setFontLoading(true)} onError={() => console.log('font loading in error')}></AppLoading>)
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigator>
          </DrawerNavigator>
        </NavigationContainer>

      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
