import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = (!!localStorage.getItem('accessToken'));

export const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        logIn: () => {
            return (true)
        },
        logOut: () => {
            return (false)
        }
    }
});

export const { logIn, logOut } = isAuthSlice.actions;