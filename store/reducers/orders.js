import { ADD_ORDER } from "../actions/orders";
import { DELETE_PRODUCT, deleteOrder } from "../actions/products";

const initialState = {
    orders: []
}
export default (state = initialState, action) => {

    let newOrder
    switch (action.type) {
        case ADD_ORDER:
            newOrder = {
                id: new Date().toString(),
                items: action.orderData.item,
                totalAmount: action.orderData.amount,
                date: new Date()
            }
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
        case DELETE_PRODUCT:
            const checkOrder = state.orders.filter(data => data.items.find(data => data.product_id === action.product_id))

            const orderId = []

            newOrder = state.orders
            if (checkOrder.length > 0) {
                for (let i = 0; i < newOrder.length; i++) {

                    const deletedItem = newOrder[i].items.find(data => data.product_id === action.product_id)

                    newOrder[i].items = newOrder[i].items.filter(data => data.product_id !== action.product_id)
                    if (newOrder[i].items.length === 0) {
                        newOrder.splice(i, 1)
                        return { ...state, orders: newOrder }

                    } else {
                        newOrder[i].totalAmount = newOrder[i].totalAmount - deletedItem.sum
                        return { ...state, orders: newOrder }
                    }
                }





            } else {
                return state
            }


    }
    return state
}