// App.js
import React from 'react';
import './App.css';
import MyCarousel from "./Components/CarouselComponent.js";
import MyMenu from './Components/Menu.js';
import MySteps from './Components/Steps.js';
import MyForm from './Components/Form.js';

function App() {
  return (
    <div>
      <MyMenu/>
  
      {/* <MyCarousel /> */}
      {/* <MySteps/> */}
      <h1>
        <span>Estimation d'un bien</span>
      </h1>
      <MyForm/>
      
    </div>
  );
}

export default App;
