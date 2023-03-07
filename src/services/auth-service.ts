import { AxiosResponse } from 'axios';

import $api from '../http';
import { AuthResponse } from '../models/response/auth-response';

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/local', { username, password })
    }

    static async register(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/local/register', { username, password })
    }

    static async logout(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/logout')
    }
}