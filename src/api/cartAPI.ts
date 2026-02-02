import axiosPrivate from "../config/axios/axiosInstance";

export const getUserCart = async (userId: string) => {
    const response = await axiosPrivate.get(`/Cart/${userId}`);
    return response.data;
}

export const addToCart = async (userId:number,cartId: number, productId: number, quantity: number) => {
    const response = await axiosPrivate.post(`/Cart/${userId}/items`, {
        cartId,
        productId,
        quantity
    });
    return response.data;
}

export const updateCartItem = async (userId:number, quantity: number,productId:number) => {
    if(quantity < 1){
        throw new Error("Quantity cannot be less than 1");
    }
    if(!productId){
        throw new Error("Product ID is required to update cart item");
    }
    const response = await axiosPrivate.patch(`/Cart/${userId}/updatecartitem`, {
        userId,
        productId,
      quantity,
    });
    console.log("Update Cart Item Response:", response);
    return response.data;
}