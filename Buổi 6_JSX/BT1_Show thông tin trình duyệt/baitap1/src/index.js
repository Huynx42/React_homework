import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

const showInfor = (
  <h4> Browser 's details : {navigator.userAgent}</h4>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(showInfor);