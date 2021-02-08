import { createIconSetFromFontello } from '@expo/vector-icons'
import { ADD_ORDER } from "../actions/orders";
import { add } from 'react-native-reanimated'
import PRODUCT from '../../data/dummy-data'
import cartItem from '../../models/cart-item'
import { ADD_TO_CART, addToCart, REMOVE_FROM_CART, removeFromCart } from '../actions/cart'
import { DELETE_PRODUCT, deleteOrder } from '../actions/products'

const initialState = {
    items: [],
    totalAmounts: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price
            const productTitle = addedProduct.title

            const checkAvailable = state.items.find((data) => data.product_id === addedProduct.id);

            let updatedNewCartItem = {}
            if (checkAvailable !== undefined) {
                // const getAvailableObject = state.items.find((data) => data.)
                updatedNewCartItem = {
                    product_id: addedProduct.id,
                    productPrice: addedProduct.price,
                    productTitle: addedProduct.title,
                    sum: addedProduct.price + checkAvailable.sum,
                    quantity: checkAvailable.quantity + 1
                }
                const index = state.items.findIndex((data) => data.product_id === addedProduct.id)
                const newArray = [...state.items]
                newArray[index] = { ...newArray[index], ...updatedNewCartItem }

                return { ...state, items: newArray, totalAmounts: state.totalAmounts + updatedNewCartItem.productPrice }


            } else {
                updatedNewCartItem = {
                    product_id: addedProduct.id,
                    productPrice: addedProduct.price,
                    productTitle: addedProduct.title,
                    sum: addedProduct.price,
                    quantity: 1
                }

                return {
                    ...state, items: [...state.items, updatedNewCartItem], totalAmounts: state.totalAmounts + updatedNewCartItem.productPrice
                }
            }

        case REMOVE_FROM_CART:
            const allCartItem = state.items
            const deleteItem = allCartItem.find((data) => data.product_id === action.productId)
            if (deleteItem.quantity > 1) {
                const obj = {
                    product_id: deleteItem.product_id,
                    productPrice: deleteItem.productPrice,
                    productTitle: deleteItem.productTitle,
                    sum: deleteItem.sum - deleteItem.productPrice,
                    quantity: deleteItem.quantity - 1
                }
                const index = state.items.findIndex(data => data.product_id === action.productId)
                let newArray = state.items
                newArray[index] = obj

                return { ...state, items: newArray, totalAmounts: state.totalAmounts - deleteItem.productPrice }

            }
            const newArray = allCartItem.filter(data => data.product_id !== action.productId)

            return { ...state, items: newArray, totalAmounts: state.totalAmounts - deleteItem.sum }
        case ADD_ORDER:
            return initialState
        case DELETE_PRODUCT:
            const getDeletedItem = state.items.find((data) => data.product_id === action.product_id)
            let newTotalAmount
            if (getDeletedItem) {
                newTotalAmount = state.totalAmounts - getDeletedItem.sum
                console.log(state.totalAmounts, getDeletedItem.sum)
                const checkCart = state.items.filter((data) => data.product_id !== action.product_id)

                return { ...state, items: checkCart, totalAmounts: newTotalAmount }
            }
            return state




    }
    return state
}