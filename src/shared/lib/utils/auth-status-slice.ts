import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string = '/auth';

export const authStatusSlice = createSlice({
    name: 'authStatus',
    initialState,
    reducers: {
        setAuthStatus: (state, action: PayloadAction<string>) => {
            return (action.payload)
        }
    }
});

export const { setAuthStatus } = authStatusSlice.actions;