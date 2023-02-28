import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Auth } from './pages/auth';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
import { OfferAgreement } from './pages/offer';
import { Register } from './pages/register';
import { TermsOfUse } from './pages/terms';
import { store } from './redux';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/reg' element={<Register />} />
          <Route path='/terms' element={<TermsOfUse />} />
          <Route path='/offer' element={<OfferAgreement />} />
          <Route path='/books/all' element={<MainPage />} />
          <Route path='/books/:category' element={<MainPage />} />
          <Route path='/books/:category/:id' element={<BookPage />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </Provider>
);
