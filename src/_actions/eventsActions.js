import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../_helpers/axios";

const createEvent = createAsyncThunk (
    'event/createEvent',
    async (event) => {
        try {
            const resp = await axios.post('/events', event);
            if (resp.status === 200) {
                return resp.data;
            }
        } catch (error) {
            console.log(error); 
        }
    }
);

export const eventActions = {
    createEvent,
};