import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: boolean = (!!localStorage.getItem('accessToken'));

export const isRememberMeAuthSlice = createSlice({
    name: 'isRememberMeAuth',
    initialState,
    reducers: {
        rememberMeLogIn: (state, action: PayloadAction<string>) => {
            localStorage.setItem('accessToken', action.payload);

            return (true)
        },
        rememberMeLogOut: () => {
            localStorage.removeItem('accessToken');

            return (false)
        }
    }
});

export const { rememberMeLogIn, rememberMeLogOut } = isRememberMeAuthSlice.actions;