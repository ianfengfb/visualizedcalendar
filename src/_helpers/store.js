import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import userReducer from "../_reducers/UserSlice";
import {createEventTypeSlice, getEventTypesSlice} from "../_reducers/eventTypeSlice";
import { createEventSlice } from "../_reducers/eventsSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        createEventType: createEventTypeSlice.reducer,
        getEventTypes: getEventTypesSlice.reducer,
        createEvent: createEventSlice.reducer,
    },
});

export default store;