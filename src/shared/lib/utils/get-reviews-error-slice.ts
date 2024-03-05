import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const getReviewsErrorSlice = createSlice({
    name: 'getReviewsError',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<boolean>) => {
            return (action.payload)
        }
    }
});

export const { setError } = getReviewsErrorSlice.actions;