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
