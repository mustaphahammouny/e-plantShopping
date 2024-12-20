import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const plant = state.items.find(
                (item) => item.name === action.payload.name
            );

            if (plant) {
                plant.quantity++;
            } else {
                state.items.push({ ...plant, quantity: 1 });
            }
        },
        removeItem: (state, action) => {},
        updateQuantity: (state, action) => {},
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
