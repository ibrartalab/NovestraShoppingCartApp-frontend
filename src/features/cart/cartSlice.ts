import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import * as cartAPI from "../../api/cartAPI";

interface CartItem {
  cartId: number | null;
  productId: number;
  quantity: number;
  product: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
    id: number;
  };
  id: number | null;
}

interface CartState {
  userId: number | null;
  cartItems: CartItem[]; // Start with empty array
  id: number | null;
  loading: boolean;
  error: string | null;
  totalPrice: number;
  totalItems: number;
}

const initialState: CartState = {
  userId: null,
  cartItems: [], // CLEAN: No placeholder object
  id: null,
  loading: false,
  error: null,
  totalPrice: 0,
  totalItems: 0,
};

// Helper to calculate totals within the slice
const calculateTotals = (state: CartState) => {
  state.totalItems = state.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  state.totalPrice = state.cartItems.reduce((acc, item) => {
    // 1. Check for 'product' (JS) OR 'Product' (C#)
    const productObj = item.product || (item as any).Product;

    // 2. Check for 'price' (JS) OR 'Price' (C#)
    const price = productObj?.price ?? productObj?.Price ?? 0;

    return acc + price * item.quantity;
  }, 0);
};

export const getCart = createAsyncThunk("cart/getcart", async (userId: string, { rejectWithValue }) => {
  try {
    return await cartAPI.getUserCart(userId);
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to get cart");
  }
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    {
      userId,
      cartId,
      productId,
      quantity,
    }: { userId: number; cartId: number; productId: number; quantity: number },
    { rejectWithValue }
  ) => {
    try {
      // Implement add to cart API call here
      const response = await cartAPI.addToCart(
        userId,
        cartId,
        productId,
        quantity
      );
      console.log("Add to Cart Response:", response);
      return response; // Return appropriate response
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to add to cart");
    }
  }
);

export const updateCartItemQty = createAsyncThunk(
  "cart/updateQty",
  async (
    {
      userId,
      productId,
      quantity,
    }: { userId: number; productId: number; quantity: number },
    { rejectWithValue }
  ) => {
    try {
      // FIX: This 'response' variable now holds the actual Cart object
      // because cartAPI.updateCartItem returns 'response.data'
      const response = await cartAPI.updateCartItem(
        userId,
        quantity,
        productId
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || "Failed to update quantity"
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUpdateCartItemQty: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const item = state.cartItems.find(
        (i) => i.productId === action.payload.productId
      );
      if (item) {
        item.quantity = action.payload.quantity;
        calculateTotals(state); // Update totals immediately in state
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.cartItems || [];
        state.id = action.payload.id ?? action.payload.Id;
        state.userId = action.payload.userId;
        calculateTotals(state); // Calculate totals when data arrives
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        // If backend returns the full updated cart object:
        state.cartItems = action.payload.cartItems || [];
        state.id = action.payload.id ?? action.payload.Id;

        calculateTotals(state); // Sync totals
      })
      // --- Update Quantity ---
      .addCase(updateCartItemQty.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartItemQty.fulfilled, (state, action) => {
        state.loading = false; // STOPS the "Updating cart..." message
        state.error = null;

        // If the thunk returns the cart directly, action.payload is the cart.
        const payload = action.payload;

        if (payload) {
          // Check both lowercase and PascalCase for C# compatibility
          state.cartItems = payload.cartItems || payload.CartItems || [];
          state.id = payload.id ?? payload.Id;
          state.userId = payload.userId ?? payload.UserId;

          calculateTotals(state); // Refreshes Total Price and Items instantly
        }
      })
      .addCase(updateCartItemQty.rejected, (state, action) => {
        state.loading = false; // Reset loading so the "Updating..." message disappears
        state.error = action.payload as string;
      });
  },
});

export default cartSlice.reducer;
export const {  setUpdateCartItemQty} = cartSlice.actions;
