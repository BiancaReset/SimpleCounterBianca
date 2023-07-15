
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

const digitBoxes = document.querySelectorAll('.digit-box');

let counter = 0;

function updateCounter() {
    const digits = counter.toString().padStart(6, '0');
    
    for (let i = 0; i < digitBoxes.length; i++) {
        digitBoxes[i].textContent = digits[i];
    }
}

setInterval(() => {
    if (counter < 999999) {
        counter++;
        updateCounter();
    }
}, 1000);