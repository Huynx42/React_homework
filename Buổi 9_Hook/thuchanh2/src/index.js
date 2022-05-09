import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import Course from "./Components/Course";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Course />);