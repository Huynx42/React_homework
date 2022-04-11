import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

// const greeting = React.createElement("p",{name: "greeting-text"}, "Hello everyone");

const items = [
	"C++",
	"PHP",
	"JAVA"
];
const programming = React.createElement("section", {id: "coding"}, 
    React.createElement("h1", null, "Programming Languages"),
	React.createElement("ol", {className: "coding"},
		items.map((coding, i) => //tạo ra conponent, không phải kiểu phần tử trong mảng nên không dùng {}
            React.createElement("li", { key: i }, coding),
		)
    )
);

const container = document.getElementById('root');
const root = createRoot(container);
// root.render(greeting);
root.render(programming);