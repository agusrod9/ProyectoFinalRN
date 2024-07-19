import { configureStore } from "@reduxjs/toolkit";
import { myHotWheelsApi } from "../services/dbServices";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [myHotWheelsApi.reducerPath] : myHotWheelsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myHotWheelsApi.middleware)
});

setupListeners(store.dispatch)

export default store