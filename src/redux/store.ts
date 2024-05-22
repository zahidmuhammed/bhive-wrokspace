import { configureStore } from "@reduxjs/toolkit";

import overviewReducer from "@/redux/reducers/overviewSlice";

export const store = configureStore({
    reducer: {
        overviews: overviewReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
