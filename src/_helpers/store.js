import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import userReducer from "../_reducers/UserSlice";
import {createEventTypeSlice, getEventTypesSlice} from "../_reducers/eventTypeSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        createEventType: createEventTypeSlice.reducer,
        getEventTypes: getEventTypesSlice.reducer,
    },
});

export default store;