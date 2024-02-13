import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

import './index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
