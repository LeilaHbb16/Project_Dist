// App.js
import React from "react";
import "./App.css";
import MyForm from "./Components/Form.js";
import image1 from "../src/images/estimation-etape-1.png";

function App() {
  return (
    <div className="content">
      <div className="container">
        <div className="formulaire">
          <div className="row">
            <h1>
              <span className="fa-stack">Estimation d'un bien</span>
            </h1>
            <div className="total" >
              <div className="left">
                <MyForm />
              </div>
              <div className="right">
                <div className="etape">
                <img src={image1} alt="Image 1" className="estimation" />
                </div>
                <h3>sdfghjklmlkjhgf</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
