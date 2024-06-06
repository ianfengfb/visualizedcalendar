import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../_helpers/axios";


const createEventType = createAsyncThunk (
    'eventType/createEventType',
    async (eventType, thunkAPI) => {
        try {
            const resp = await axios.post('/event-type', eventType);
            if (resp.status === 200) {
                await thunkAPI.dispatch(getEventTypes());
                return resp.data;
            }
        } catch (error) {
            console.log(error); 
        }
    }
);

const getEventTypes = createAsyncThunk (
    'eventType/getEventTypes',
    async () => {
        try {
            const resp = await axios.get('/event-type');
            if (resp.status === 200) {
                return resp.data;
            }
        } catch (error) {
            console.log(error);
        }
    }
);

const updateEventType = createAsyncThunk (
    'eventType/updateEventType',
    async (eventType, thunkAPI) => {
        try {
            const resp = await axios.put('/event-type', eventType);
            if (resp.status === 200) {
                await thunkAPI.dispatch(getEventTypes());
                return resp.data;
            }
        } catch (error) {
            console.log(error);
        }
    }
);

const deleteEventType = createAsyncThunk (
    'eventType/deleteEventType',
    async (id, thunkAPI) => {
        try {
            const resp = await axios.delete(`/event-type/${id}`);
            if (resp.status === 200) {
                await thunkAPI.dispatch(getEventTypes());
                return resp.data;
            }
        } catch (error) {
            console.log(error);
        }
    }
);

export const eventTypeActions = {
    createEventType,
    getEventTypes,
    updateEventType,
    deleteEventType
};