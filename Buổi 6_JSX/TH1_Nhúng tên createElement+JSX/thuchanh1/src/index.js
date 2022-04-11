import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

// Bài thực hành 1 sử dụng React.createElement
const myName = React.createElement("div",{style: {textAlign: "center",paddingTop: "20px"}},
    React.createElement("hr",null,null),
    React.createElement("h3",null,"Nguyen Xuan Huy TH1")
);

//Bài thực hành 2 sử dụng JSX
const myNameJsx = (
  //vẫn phải truy xuất vào 1 Object nữa nên dùng {{}} ở đây
  <div className='name' style={{textAlign:'center'}} name='myName'>
    <hr style={{marginTop:'50px'}}></hr>
    <h3>My name is Xuan Huy</h3>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(myName);