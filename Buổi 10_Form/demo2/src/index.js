import React from 'react';
import './index.css';
// import App from './App';
import {createRoot} from 'react-dom/client';
import MyForm from './components/intro/MyForm';
import YupValidationForm from './components/validation/YupValidationForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyForm />);
// root.render(<YupValidationForm />);