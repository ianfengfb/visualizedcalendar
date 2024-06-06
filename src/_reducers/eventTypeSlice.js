
import { createSlice } from "@reduxjs/toolkit";
import { eventTypeActions } from "../_actions/eventTypeActions";

const createEventTypeSlice = createSlice({
    name: "createEventType",
    initialState: {
        isDone: false,
        isFailed: false,
        eventType: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(eventTypeActions.createEventType.pending, (state) => {
            state.isDone = false;
            state.isFailed = false;
        })
        .addCase(eventTypeActions.createEventType.fulfilled, (state, action) => {
            state.isDone = true;
            state.eventType = action.payload;
            state.isFailed = false;
        })
        .addCase(eventTypeActions.createEventType.rejected, (state, action) => {
            state.isDone = false;
            state.isFailed = true;
            state.error = action.error.message;
        });
    },
});

const getEventTypesSlice = createSlice({
    name: "getEventTypes",
    initialState: {
        isFetching: false,
        isDone: false,
        isFailed: false,
        eventTypes: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(eventTypeActions.getEventTypes.pending, (state) => {
            state.isFetching = true;
            state.isDone = false;
            state.isFailed = false;
        })
        .addCase(eventTypeActions.getEventTypes.fulfilled, (state, action) => {
            state.isFetching = false;
            state.isDone = true;
            state.eventTypes = action.payload;
            state.isFailed = false;
        })
        .addCase(eventTypeActions.getEventTypes.rejected, (state, action) => {
            state.isFetching = false;
            state.isDone = false;
            state.isFailed = true;
            state.error = action.error.message;
        });
    },
});

const updateEventTypeSlice = createSlice({
    name: "updateEventType",
    initialState: {
        isDone: false,
        isFailed: false,
        eventType: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(eventTypeActions.updateEventType.pending, (state) => {
            state.isDone = false;
            state.isFailed = false;
        })
        .addCase(eventTypeActions.updateEventType.fulfilled, (state, action) => {
            state.isDone = true;
            state.eventType = action.payload;
            state.isFailed = false;
        })
        .addCase(eventTypeActions.updateEventType.rejected, (state, action) => {
            state.isDone = false;
            state.isFailed = true;
            state.error = action.error.message;
        });
    },
});

const deleteEventTypeSlice = createSlice({
    name: "deleteEventType",
    initialState: {
        isDone: false,
        isFailed: false,
        eventType: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(eventTypeActions.deleteEventType.pending, (state) => {
            state.isDone = false;
            state.isFailed = false;
        })
        .addCase(eventTypeActions.deleteEventType.fulfilled, (state, action) => {
            state.isDone = true;
            state.eventType = action.payload;
            state.isFailed = false;
        })
        .addCase(eventTypeActions.deleteEventType.rejected, (state, action) => {
            state.isDone = false;
            state.isFailed = true;
            state.error = action.error.message;
        });
    },
});

export { createEventTypeSlice, getEventTypesSlice, updateEventTypeSlice, deleteEventTypeSlice}