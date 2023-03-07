import { IUser } from '../i-user';

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}