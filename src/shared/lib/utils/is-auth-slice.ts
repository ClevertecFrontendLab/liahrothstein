import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: boolean = (!!localStorage.getItem('accessToken'));

export const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<string>) => {
            localStorage.setItem('accessToken', action.payload)

            return (true)
        },
        logOut: () => {
            localStorage.removeItem('accessToken')

            return (false)
        }
    }
});

export const { logIn, logOut } = isAuthSlice.actions;