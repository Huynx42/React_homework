import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import AppTest from './Component/AppTest';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppTest/>);