import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import AppTest from './Component/App';
import Home from './Component2/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
// render cách 1
// root.render(<AppTest/>);
// render cách 2
root.render(<Home/>);