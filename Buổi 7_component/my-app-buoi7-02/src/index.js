import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Greeting from './greeting';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Greeting name='Huy' age={'21'} />);