import { Overview } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    overviews: Overview[];
}

const initialState: CounterState = {
    overviews: [],
};

export const overviewSlice = createSlice({
    name: "overviews",
    initialState,
    reducers: {
        getOverViews: (state, action: PayloadAction<Overview[]>) => {
            state.overviews = action.payload;
        },
    },
});

export const { getOverViews } = overviewSlice.actions;

export default overviewSlice.reducer;
