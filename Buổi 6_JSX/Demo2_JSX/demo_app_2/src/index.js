import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

// Cách 1
// const myName = React.createElement("h3",{style: {textAlign: "center"}}, "My Name Is");

//Cách 2
const myName = React.createElement("div",{style: {textAlign: "center",paddingTop: "20px"}},
    React.createElement("hr",null,null),
    React.createElement("h3",null,"Nguyen Xuan Huy")
);

// Cách 3 dùng JSX
// dùng () để tạo 1 component cho Jsx
const myNameJsx = (
    //Vẫn phải truy xuất vào 1 Object nữa nên dùng {{}} ở đây
    <div className ="butt" style={{textAlign: "initial",paddingLeft:"50px"}} name="myNameTest">
        <h3>My name is Xuan Huy</h3>
    </div>
);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(myNameJsx);