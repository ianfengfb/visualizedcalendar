import { createSlice } from "@reduxjs/toolkit";
import { eventTypeActions } from "../_actions/eventTypeActions";
import { eventActions } from "../_actions/eventsActions";

const createEventSlice = createSlice({
    name: 'createEvent',
    initialState: {
        isDone: false,
        isFailed: false,
        event: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(eventActions.createEvent.pending, (state) => {
            state.isDone = false;
            state.isFailed = false;
        })
        .addCase(eventActions.createEvent.fulfilled, (state, action) => {
            state.isDone = true;
            state.event = action.payload;
            state.isFailed = false;
        })
        .addCase(eventActions.createEvent.rejected, (state, action) => {
            state.isDone = false;
            state.isFailed = true;
            state.error = action.error.message;
        });
    },
})

const getEventsSlice = createSlice({
    name: 'getEvents',
    initialState: {
        isFetching: false,
        isDone: false,
        isFailed: false,
        events: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(eventActions.getEvents.pending, (state) => {
            state.isFetching = true;
            state.isDone = false;
            state.isFailed = false;
        })
        .addCase(eventActions.getEvents.fulfilled, (state, action) => {
            state.isFetching = false;
            state.isDone = true;
            state.events = action.payload;
            state.isFailed = false;
        })
        .addCase(eventActions.getEvents.rejected, (state, action) => {
            state.isFetching = false;
            state.isDone = false;
            state.isFailed = true;
            state.error = action.error.message;
        });
    },
})

export { createEventSlice, getEventsSlice }