import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import App from './App';
import Account from './components/Account';
import Person from './components/Account';
import Student from './components/Students';
import Count from './components/countTo10';
import CustomHookDemo from './components/CustomHookDemo';

const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<Person />);
// root.render(<Account />);
// root.render(<Student />);
// root.render(<Count/>);
root.render(<CustomHookDemo/>);