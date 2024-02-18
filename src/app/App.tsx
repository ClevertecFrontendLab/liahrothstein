import React from 'react';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import Routing from './routes/Routing';

import { store, history } from './store';

import './App.scss';

export default function App() {

    return (
        <Provider store={store}>
            <React.StrictMode>
                <HistoryRouter history={history}>
                    <Routing />
                </HistoryRouter>
            </React.StrictMode>
        </Provider>
    )
}