import type { AxiosInstance } from "axios";
import axiosPrivate from "../config/axios/axiosInstance";
import type {  Product } from "../features/product/types";

export const getProducts = async () => {
    const response = await axiosPrivate.get<Product[]>("/Products");
    return response.data;
}

export const createProduct = async(payload: Product,axiosPrivate:AxiosInstance) => {
    const response =  await axiosPrivate.post<Product>("/Products", payload);
    return response.data;
}