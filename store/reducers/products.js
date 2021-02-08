import PRODUCT from '../../data/dummy-data'
import { DELETE_PRODUCT, deleteOrder } from "../actions/products";

const initialState = {
    availableProducts: PRODUCT,
    userProducts: PRODUCT.filter(data => data.ownerId === 'u1')
}
export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            const newAvailableProducts = state.availableProducts.filter((data) => data.id !== action.product_id)
            const newUserProducts = state.userProducts.filter((data) => data.id !== action.product_id)
            return { ...state, availableProducts: newAvailableProducts, userProducts: newUserProducts }

    }
    return state
}