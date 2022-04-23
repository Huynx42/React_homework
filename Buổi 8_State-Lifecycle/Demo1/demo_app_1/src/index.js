import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import StateDemo from './component/StateDemo';
import StateDemo2 from './component/StateDemo2';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StateDemo2 />);