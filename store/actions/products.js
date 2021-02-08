export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const deleteOrder = (productId) => {
    return { type: DELETE_PRODUCT, product_id: productId }
}