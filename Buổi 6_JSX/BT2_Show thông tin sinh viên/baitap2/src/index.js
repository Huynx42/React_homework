import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

const students = [
  {
    company:"Alfreds Futterkiste",
    contact:"Maria Anders",
    country:"Germany"
  },
  {
    company:"Berglunds snabbköp",
    contact:"Christina Berglund",
    country:"Sweden"
  },
  {
    company:"Centro comercial Moctezuma",
    contact:"Francisco Chang",
    country:"Mexico"
  },
  {
    company:"Ernst Handel",
    contact:"Roland Mendel",
    country:"Austria"
  },
  {
    company:"Island Trading",
    contact:"Helen Bennett",
    country:"UK"
  },
  {
    company:"Königlich Essen",
    contact:"Philip Cramer",
    country:"Germany"
  },
  {
    company:"Laughing Bacchus Winecellars",
    contact:"	Yoshi Tannamuri",
    country:"	Canada"
  },
  {
    company:"Magazzini Alimentari Riuniti",
    contact:"Giovanni Rovelli",
    country:"Italy"
  }
]

const show = (
  <div>
    <h2>SHOW STUDENTS</h2>
    <table id='customers'>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map((student) => (
            <tr>
              <td>{student.company}</td>
              <td>{student.contact}</td>
              <td>{student.country}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(show);