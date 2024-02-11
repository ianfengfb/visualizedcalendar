import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../_helpers/axios";

const createEventType = createAsyncThunk (
    'eventType/createEventType',
    async (eventType) => {
        try {
            const resp = await axios.post('/event-type', eventType);
            if (resp.status === 200) {
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

export const eventTypeActions = {
    createEventType,
    getEventTypes,
};