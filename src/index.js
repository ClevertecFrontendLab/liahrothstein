import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main';
import { TermsOfUse } from './pages/terms';
import { OfferAgreement } from './pages/offer';
import { BookPage } from './pages/book';

import './index.css';
import { store } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/terms' element={<TermsOfUse />} />
        <Route path='/offer' element={<OfferAgreement />} />
        <Route path='/books/all/:id' element={<BookPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
  </Provider>
);
