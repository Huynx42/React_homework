import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';

const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];
const list = (
  <div>
    <h1>List of fruits</h1>
    <ul>
      {fruits.map((item) => <li>{item}</li>)}
    </ul>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(list);