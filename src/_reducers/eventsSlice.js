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

export { createEventSlice }