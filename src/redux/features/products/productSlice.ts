import { reducer } from "@/components/ui/use-toast";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
    status: boolean;
    priceRange: number;
}

const initialState: IProduct = {
    status: false,
    priceRange: 150
};


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        toggaleState: (state) => { state.status = !state.status },
        setPriceRange: (state, action: PayloadAction<number>) => {
            state.priceRange = action.payload;
        }
    }

});

export const { toggaleState, setPriceRange } = productSlice.actions;
export default productSlice.reducer;