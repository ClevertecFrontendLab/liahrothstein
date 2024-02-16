import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import Routing from './routes/Routing';

import { setupStore, history } from './store';

import './App.scss';

export default function App() {
    const store = setupStore();
    const [isAuth, setIsAuth] = useState(true);

    return (
        <Provider store={store}>
            <React.StrictMode>
                <HistoryRouter history={history}>
                    <Routing isAuth={isAuth} />
                </HistoryRouter>
            </React.StrictMode>
        </Provider>
    )
}