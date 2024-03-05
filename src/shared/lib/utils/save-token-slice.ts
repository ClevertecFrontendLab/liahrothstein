import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string = '';

export const saveTokenSlice = createSlice({
    name: 'saveToken',
    initialState,
    reducers: {
        saveToken: (state, action: PayloadAction<string>) => {
            return (action.payload)
        },
        removeToken: () => {
            return ('')
        }
    }
});

export const { saveToken, removeToken } = saveTokenSlice.actions;