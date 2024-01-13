import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import userReducer from "../_reducers/UserSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default store;