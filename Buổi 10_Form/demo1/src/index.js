import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import MyForm from './components/intro/MyForm';
import TextArea from './components/other-tags-form/TextArea';
import Dropdown from './components/other-tags-form/Dropdown';
import File from './components/other-tags-form/File';
import MyValidateForm from './components/other-tags-form/MyValidateForm';

const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<MyForm />);
// root.render(<TextArea />);
// root.render(<Dropdown />);
// root.render(<File />);
root.render(<MyValidateForm />);