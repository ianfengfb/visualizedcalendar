import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../_helpers/axios";
import { setUser } from "../_helpers/set-user";


const loginUser = createAsyncThunk (
    'user/loginUser',
    async (userCredentials) => {
        // await csrfToken();
        try {
            const resp = await axios.post('/login', userCredentials);
            if (resp.status === 200) {
                setUser(resp.data.user);
                return resp.data;
			}
        } catch (error) {
            console.log(error); 
        }
    }
    );
    
    const registerUser = createAsyncThunk ();
    
    const logoutUser = createAsyncThunk ();

    const readAllUser = createAsyncThunk (
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

    export const authActions = {
        loginUser,
        registerUser,
        logoutUser,
        readAllUser,
    };