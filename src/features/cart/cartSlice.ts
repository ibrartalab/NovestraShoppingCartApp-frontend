import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as cartAPI from "../../api/cartAPI";

interface CartState {
  userId: number | null;
  cartItems: [
    {
      cartId: number | null;
      productId: number | null;
      quantity: number;
      product: {
        name:string;
        description:string;
        price: number;
        imageUrl: string;
        stock: number;
        category: string;
        id: number | null;
      };
      id: number | null;
    }
  ];
  id: number | null;
  loading?: boolean;
  error?: string | null;
}

const initialState:CartState = {
    userId:null,
    cartItems:[
        {
            cartId:null,
            productId:null,
            quantity:null,
            product: {
                name:"",
                description:"",
                price:0,
                imageUrl:"",
                stock:0,
                category:"",
                id:null
            },
            id:null
        }
    ],
    id:null,
}

export const getCart = createAsyncThunk(
    "cart/getcart",
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await cartAPI.getUserCart(userId);
            return response;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Failed to get cart"
            );
    }
}
);

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ userId,cartId, productId, quantity }: { userId:number,cartId: number; productId: number; quantity: number }, { rejectWithValue }) => {
        try {
            // Implement add to cart API call here
            const response = await cartAPI.addToCart(userId,cartId, productId, quantity);
            console.log("Add to Cart Response:", response);
            return response; // Return appropriate response
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Failed to add to cart"
            );
    }
}
    );


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartData: (state, action) => {
            state.cartItems = action.payload.cartItems;
            state.id = action.payload.id;
            state.userId = action.payload.userId;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getCart.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getCart.fulfilled, (state, action) => {
            state.loading = false;
            // Try PascalCase if camelCase is undefined
            state.cartItems =
              action.payload.cartItems;
            state.id = action.payload.id ?? action.payload.Id;
            state.userId = action.payload.userId;
          })
          .addCase(getCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          })
          .addCase(addToCart.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(addToCart.fulfilled, (state, action) => {
            state.loading = false;
            // Assuming your backend returns the updated list of items or the new item
            // If it returns the full cart:
            state.cartItems = action.payload.cartItems;
            state.id = action.payload.id; // Keep the cartId in sync
          })
          .addCase(addToCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
    },
});

export default cartSlice.reducer;
export const { setCartData } = cartSlice.actions;