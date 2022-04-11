import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

const showCard = (
  <div className='container'>
    <div className='card'>
      <div className='card--header'>
        <img className='avatar' src='https://techtrickseo.com/wp-content/uploads/2016/09/Mr-bean-as-an-avatar-whatsapp-dp-280x300.jpg' alt='avatar'/>
      </div>
      <div className='card--body'>
        <div>
          <p className='text-header'>Mr Bean Avatar</p>
          <p className='text-sub'>Mr Bean is Rowan Atkinson, in full Rowan Sebastian Atkinson, (born January 6, 1955, Newcastle upon Tyne, England),</p>
          <button className='btn'>FOLLOW ME</button>
        </div>
      </div>
    </div>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(showCard);