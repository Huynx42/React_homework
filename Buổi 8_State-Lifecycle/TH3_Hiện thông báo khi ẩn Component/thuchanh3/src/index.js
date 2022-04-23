import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import AppTest from './component/AppTest';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppTest/>);