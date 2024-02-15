import React from 'react';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import { MainPage } from '@pages/index';

import { setupStore, history } from './store';

import './App.scss';

export default function App() {
    const store = setupStore();

    return (
        <Provider store={store}>
            <React.StrictMode>
                <HistoryRouter history={history}>
                    <MainPage />
                </HistoryRouter>
            </React.StrictMode>
        </Provider>
    )
}