interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
    imageUrl: string;
}

export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}