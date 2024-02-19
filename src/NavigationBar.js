
import React from 'react';
import './NavigationBar.css';
import Car from './Car';


const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="./Home.js">Home</a></li>
        <li><a href="./Car.js">products</a></li>
        <li><a href="/contact">Payment</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;