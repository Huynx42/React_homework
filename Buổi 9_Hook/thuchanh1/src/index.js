import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Number from './Components/Number';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Number/>);