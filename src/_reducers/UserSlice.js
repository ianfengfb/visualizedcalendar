import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../_helpers/axios";
import { setUser } from "../_helpers/set-user";


const csrfToken = async () => {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    return true;
}

export const loginUser = createAsyncThunk (
    'user/loginUser',
    async (userCredentials) => {
        // await csrfToken();
        try {
            const resp = await axios.post('/login', userCredentials);
            if (resp.status === 200) {
				setUser(resp.data.user);
			}
        } catch (error) {
            console.log(error); 
        }
    }
);

export const readAllUser = createAsyncThunk (
    'user/readAllUser',
    async () => {
        try {
            const resp = await axios.get('/user');
            if (resp.status === 200) {
                console.log(resp.data);
                return resp.data;
            }
        } catch (error) {
            console.log(error); 
        }
    }

);

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(loginUser.pending, (state) => {
            state.isDone = false;
            state.isFailed = false;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isDone = true;
            state.user = action.payload;
            state.isFailed = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isDone = false;
            state.isFailed = true;
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer;