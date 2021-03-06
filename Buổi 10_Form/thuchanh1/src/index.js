import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupForm from './components/forms/SignupForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SignupForm />);