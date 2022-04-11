import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

const tiktok = () => {
  const showTime = (
    <div>
      <hr style={{marginTop:'50px'}}></hr>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );  
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(showTime);
}

setInterval(tiktok,1000);