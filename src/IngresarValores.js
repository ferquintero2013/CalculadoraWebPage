import "./IngresarValores.css";
import React from "react";

function IngresarValores({
    enterValues1, 
    setEnterValues1,
    enterValues2,
    setEnterValues2}){
    
    return (
        <li>
            <input placeholder="Number 1" 
                value={enterValues1}
                onChange={(event) => {
                setEnterValues1(event.target.value)
            }}
            /> 
            <input placeholder="Number 2" 
                value={enterValues2}
                onChange={(event) => {
                setEnterValues2(event.target.value)
            }}
            /> 
        </li>
    )
  }

  export { IngresarValores };