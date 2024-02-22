import { createSlice } from "@reduxjs/toolkit";

import { AuthStatus } from "../../types";

const initialState: AuthStatus = AuthStatus.Auth;

export const authStatusSlice = createSlice({
    name: 'authStatus',
    initialState,
    reducers: {
        setLogIn: () => {
            return (AuthStatus.LoggedIn)
        },
        setAuth: () => {
            return (AuthStatus.Auth)
        },
        setAuthError: () => {
            return (AuthStatus.AuthError)
        },
        setRegister: () => {
            return (AuthStatus.Register)
        },
        setRegisterError: () => {
            return (AuthStatus.RegisterError)
        },
        setRegisterSuccess: () => {
            return (AuthStatus.RegisterSuccess)
        },
        setCheckEmailError: () => {
            return (AuthStatus.CheckEmailError)
        },
        setCheckEmailErrorNoExist: () => {
            return (AuthStatus.CheckEmailErrorNoExist)
        },
        setConfirmEmail: () => {
            return (AuthStatus.ConfirmEmail)
        },
        setChangePassword: () => {
            return (AuthStatus.ChangePassword)
        },
        setChangePasswordError: () => {
            return (AuthStatus.ChangePasswordError)
        },
        setChangePasswordSuccess: () => {
            return (AuthStatus.ChangePasswordSuccess)
        },
    }
});

export const {
    setLogIn,
    setAuth,
    setAuthError,
    setRegister,
    setRegisterError,
    setRegisterSuccess,
    setCheckEmailError,
    setCheckEmailErrorNoExist,
    setConfirmEmail,
    setChangePassword,
    setChangePasswordError,
    setChangePasswordSuccess
} = authStatusSlice.actions;