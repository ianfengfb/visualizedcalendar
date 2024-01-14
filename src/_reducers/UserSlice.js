import { createSlice } from "@reduxjs/toolkit";
import { authActions } from "../_actions/authActions";

// const csrfToken = async () => {
//     await axios.get('http://localhost:8000/sanctum/csrf-cookie');
//     return true;
// }

const userSlice = createSlice({
    name: "user",
    initialState: {
        isDone: false,
        isFailed: false,
        user: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(authActions.loginUser.pending, (state) => {
            state.isDone = false;
            state.isFailed = false;
        })
        .addCase(authActions.loginUser.fulfilled, (state, action) => {
            state.isDone = true;
            state.user = action.payload;
            state.isFailed = false;
        })
        .addCase(authActions.loginUser.rejected, (state, action) => {
            state.isDone = false;
            state.isFailed = true;
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer;