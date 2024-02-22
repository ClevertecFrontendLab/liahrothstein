export { default as getCookie } from './get-cookie';
export { default as switcher } from './switcher';
export { validateEmail, validatePassword, comparePasswords } from './validate';
export { isAuthSlice, logIn, logOut } from './is-auth-slice';
export { isRememberMeAuthSlice, rememberMeLogIn, rememberMeLogOut } from './is-remember-me-auth-slice';
export {
    authStatusSlice,
    setLogIn,
    setAuth,
    setAuthError,
    setChangePassword,
    setChangePasswordError,
    setChangePasswordSuccess,
    setCheckEmailError,
    setCheckEmailErrorNoExist,
    setConfirmEmail,
    setRegister,
    setRegisterError,
    setRegisterSuccess
} from './auth-status-slice';