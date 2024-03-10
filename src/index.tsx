import { createRoot } from 'react-dom/client';
import App from './app/App';

import "antd/dist/antd.min.css";
import './index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <App />
);
