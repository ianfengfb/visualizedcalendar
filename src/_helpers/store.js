import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import userReducer from "../_reducers/UserSlice";
import {createEventTypeSlice, getEventTypesSlice, updateEventTypeSlice, deleteEventTypeSlice} from "../_reducers/eventTypeSlice";
import { createEventSlice, getEventsSlice } from "../_reducers/eventsSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        createEventType: createEventTypeSlice.reducer,
        getEventTypes: getEventTypesSlice.reducer,
        updateEventType: updateEventTypeSlice.reducer,
        deleteEventType: deleteEventTypeSlice.reducer,
        createEvent: createEventSlice.reducer,
        getEvents: getEventsSlice.reducer,
    },
});

export default store;