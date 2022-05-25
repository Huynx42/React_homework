import React from 'react';
import {createRoot} from 'react-dom/client';
import Shop from './components/demo2/Shop';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Shop />);