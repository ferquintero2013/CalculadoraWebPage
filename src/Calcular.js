import React from "react";
import "./Calcular.css";

function Calcular({ valor1, valor2 }) {
  // Convertir los valores a números enteros usando parseInt
  const num1 = parseInt(valor1, 10);
  const num2 = parseInt(valor2, 10);

  // Verificar si la conversión fue exitosa
  if (isNaN(num1) || isNaN(num2)) {
    return <h1>Por favor, introduce valores numéricos enteros.</h1>;
  }

  // Calcular la suma solo si los valores son números enteros
  const suma = num1 + num2;

  return <h1>La suma de los valores es: {suma}</h1>;
}

export { Calcular };
