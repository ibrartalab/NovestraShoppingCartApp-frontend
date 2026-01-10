export interface Product{
    name: string;
    category: string;
    price: number;
    stock: number;
    description: string;
    imageUrl: string;
}

export interface GetProductById{
    id: number;
}


