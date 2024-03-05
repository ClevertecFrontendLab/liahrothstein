export { default as getCookie } from './get-cookie';
export { default as switcher } from './switcher';
export { validateEmail, validatePassword, comparePasswords } from './validate';
export { isAuthSlice, logIn, logOut } from './is-auth-slice';
export { isRememberMeAuthSlice, rememberMeLogIn, rememberMeLogOut } from './is-remember-me-auth-slice';
export { authStatusSlice, setAuthStatus } from './auth-status-slice';
export { setError, getReviewsErrorSlice } from './get-reviews-error-slice';
export { saveTokenSlice, saveToken, removeToken } from './save-token-slice';